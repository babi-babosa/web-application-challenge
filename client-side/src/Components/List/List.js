import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersInfo: []
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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
                            {
                                this.state.usersInfo.map((userInfo, key) => {
                                    return (  
                                        <tr key={key}>
                                            <td>{userInfo.firstName} {userInfo.lastName}</td>
                                            <td>{userInfo.country}</td>
                                            <td>{userInfo.birthdayDate}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

  export default List;