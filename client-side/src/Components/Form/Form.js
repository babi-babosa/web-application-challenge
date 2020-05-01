import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from "react-bootstrap/Spinner";
import DatePicker from "react-datepicker";
import ReactCSSTransitionGroup from 'react-transition-group'; 
import './formComponent.css';

function UserForm() {
  // Declare a new state variable, which we'll call "count"
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countrySelected, setCountrySelected] = useState('');
  const [birthdayDate, setBirthdayDate] = useState(new Date());
  const [isLoading, setLoading] = useState(false);
  const [allChecked, checkInputs] = useState(false);

  return (
    <Card style={{ width: '500px' }}>
                <Card.Body>
                        <Form>
                            <Form.Group controlId="formFirstAndLastName">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="firstName" placeholder="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                                        <Form.Text className="text-muted">
                                            *You're first name is required.
                                        </Form.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="lastName" placeholder="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                                        <Form.Text className="text-muted">
                                            *You're last name is required.
                                        </Form.Text>
                                    </Col>
                                </Row>
                            </Form.Group>
                            
                            <Form.Group controlId="formCountry">
                                <Form.Label>Select Country</Form.Label>
                                <Form.Control as="select" onSelect={(event) => setCountrySelected('Portugal')}>
                                    <option>Portugal</option>
                                    <option>Spain</option>
                                    <option>France</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                   *Select a country is required.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBirthday">
                                <Form.Label>Birthday</Form.Label>
                                <br></br>
                                <DatePicker className="date-picker"
                                        selected={birthdayDate}
                                        onChange={(date) => setBirthdayDate(date)}
                                />
                                <Form.Text className="text-muted">
                                    *Input a birthday date is required.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={() => setLoading(isLoading ? false : true)} disabled={ !allChecked }>
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
            </Card>
  )
}

export default UserForm;