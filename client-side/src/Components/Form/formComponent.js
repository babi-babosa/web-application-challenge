import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './formComponent.css';

class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            startDate: new Date(),
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
      
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Card style={{ width: '500px' }}>
                <Card.Body>
                        <Form>
                            <Form.Group controlId="formFirstAndLastName">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="firstName" placeholder="First name" onChange={this.handleInputChange}/>
                                        <Form.Text className="text-muted">
                                            You're first name is required.
                                        </Form.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="LastName" placeholder="Last name" onChange={this.handleInputChange}/>
                                        <Form.Text className="text-muted">
                                            You're last name is required.
                                        </Form.Text>
                                    </Col>
                                </Row>
                            </Form.Group>
                            
                            <Form.Group controlId="formCountry">
                                <Form.Label>Select Country</Form.Label>
                                <Form.Control as="select">
                                    <option>Portugal</option>
                                    <option>Spain</option>
                                    <option>France</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBirthday">
                                <Form.Label>Birthday</Form.Label>
                                <br></br>
                                <DatePicker className="date-picker"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit registration
                            </Button>
                        </Form>
                </Card.Body>
            </Card>
        );
    }
}

  export default FormControl;