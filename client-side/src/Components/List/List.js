import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    }

    render() {
        return (
            <Card style={{ width: '500px' }}>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{this.props.firstName} {this.props.lastName}</td>
                            <td>{this.props.country}</td>
                            <td>{this.props.birthdayDate}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

  export default List;