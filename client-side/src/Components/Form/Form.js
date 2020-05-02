import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import List from '../List/List';
import axios from 'axios';
import './formComponent.css';
import { messageService } from '../../Services/messaging';

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countrySelected, setCountrySelected] = useState('');
  const [birthdayDate, setBirthdayDate] = useState(new Date());

  const [isLoading, setLoading] = useState(false);
  const [isWaiting, setWaiting] = useState(true);
  const [allChecked, checkInputs] = useState(false);
  const [isbirthdayDateInputed, birthdayDateInputed] = useState(false);
  const [finalPhrase, setPhrase] = useState('');
  const { triggerValidation, register, errors } = useForm();
  const options = [];

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/countries`)
    .then(res => {
        const countries = res.data;
        countries.forEach(country => {
          options.push({value: country._id, label: country.name});
        });
        setWaiting(false);
    })
  }, [options, setWaiting])

  const onSubmit = values => {
    messageService.sendMessage(`Hello ${values.firstName} ${values.lastName} from ${values.countrySelected}`)
    console.log(values); 
    //setLoading(isLoading = true); 
    //allChecked = true;
  };

  return (
    <Card style={{ width: '500px' }}>
          <Card.Body>
                  <Form>
                      <Form.Group controlId="formFirstAndLastName">
                          <Row>
                              <Col>
                                  <Form.Label>First Name</Form.Label>
                                  <Form.Control type="firstName" 
                                      name="firstName" 
                                      placeholder="First name" 
                                      value={firstName} 
                                      onChange={(event) => setFirstName(event.target.value)}
                                      ref={register({
                                        required: "Required"
                                      })}
                                      />
                                    {
                                      errors.firstName && 
                                      <Form.Text className="attention">
                                          *You're first name is required.
                                      </Form.Text>
                                    }
                              </Col>
                              <Col>
                                  <Form.Label>Last Name</Form.Label>
                                  <Form.Control type="lastName" 
                                    name="lastName" 
                                    placeholder="Last name" 
                                    value={lastName} 
                                    onChange={(event) => setLastName(event.target.value)}
                                    ref={register({
                                      required: "Required",
                                    })}
                                  />
                                    {
                                      errors.lastName && firstName === '' && 
                                      <Form.Text className="attention">
                                          *You're last name is required.
                                      </Form.Text>
                                    }
                              </Col>
                          </Row>
                      </Form.Group>
                      
                      <Form.Group controlId="formCountry">
                          <Form.Label>Select Country</Form.Label>
                          <Select 
                              name="countrySelected" 
                              options={options}  
                              isLoading={isWaiting}
                              isDisabled={isWaiting}
                              onChange={(value, _) => setCountrySelected(value.label)}
                              placeholder="Select a country..."
                            />
                          {
                            countrySelected === '' && 
                            <Form.Text className="attention">
                              *Select a country is required.
                            </Form.Text>
                          } 
                      </Form.Group>

                      <Form.Group controlId="formBirthday">
                          <Form.Label>Birthday</Form.Label>
                          <br></br>
                          <DatePicker className="date-picker"
                              name="birthdayDate" 
                              selected={birthdayDate}
                              onChange={(date) => { setBirthdayDate(date); birthdayDateInputed(true) }}
                          />
                          {
                            !isbirthdayDateInputed && 
                            <Form.Text className="attention">
                                *Input a birthday date is required.
                            </Form.Text>
                          } 
                      </Form.Group>

                      <Button variant="primary"  disabled={ allChecked }
                        onClick={async () => {
                          const resultL = await triggerValidation("lastName");
                          const resultF = await triggerValidation("firstName");
                          if (resultF && resultL && isbirthdayDateInputed && countrySelected !== '') { 
                            setLoading(true);
                            messageService.sendMessage(`Hello ${firstName} ${lastName} from ${countrySelected}`);
                          }
                        }}
                      >
                          {
                              isLoading &&
                                  <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                  />
                          }
                          {' '}   Submit registration 
                      </Button>
                  </Form>
          </Card.Body>
          <div hidden={ !allChecked }>
            <p> Hello ​ {firstName} {lastName} ​ from ​ {countrySelected} ​. </p>
          </div>
      </Card>  
  )
}

export default UserForm;