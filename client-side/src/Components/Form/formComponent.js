import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from "react-bootstrap/Spinner";
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
            toggle: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        this.setState({
            toggle: true
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
                                            *You're first name is required.
                                        </Form.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="LastName" placeholder="Last name" onChange={this.handleInputChange}/>
                                        <Form.Text className="text-muted">
                                            *You're last name is required.
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
                                <Form.Text className="text-muted">
                                   *Select a country is required.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBirthday">
                                <Form.Label>Birthday</Form.Label>
                                <br></br>
                                <DatePicker className="date-picker"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                />
                                <Form.Text className="text-muted">
                                    *Input a birthday date is required.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleSubmit} disabled={this.state.toggle}>
                                {
                                    this.state.toggle &&
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
        );
    }
}

  export default FormControl;