import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import axios from 'axios';
import './formComponent.css';
import { messageService } from '../../Services/messaging';

function UserForm(props) {
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
  const form = useRef(null);

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
                  <Form ref={form}>
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
                            let ageMs = Date.now() - birthdayDate.getTime();
                            let age = new Date(ageMs);
                            console.log("age 1", age);
                            console.log("age.getUTCFullYear()", age.getUTCFullYear());
                            age = Math.abs(age.getUTCFullYear() - new Date().getUTCFullYear());
                            console.log("age 2", age);
                            console.log("ageMs", ageMs);
                            console.log("new Date().getUTCFullYear()", new Date().getUTCFullYear());
                            messageService.sendMessage(`Hello ${firstName} ${lastName} from ${countrySelected}. On ${birthdayDate.getDay()} day of ${birthdayDate.getMonth()} you will be ${age} years old.`);
                            props.handleSubmit({
                              firstName: firstName,
                              lastName: lastName,
                              country: countrySelected,
                              birthdayDate: birthdayDate.toLocaleString().split(',')[0].split(' ')[0],
                            });
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