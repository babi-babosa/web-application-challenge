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
                                        <tr key={key} onClick={() => {
                                              messageService.sendMessage(`Hello ${userInfo.firstName} ${userInfo.lastName} from ${userInfo.country}.`);
                                              props.handleSubmit({
                                                firstName: firstName,
                                                lastName: lastName,
                                                country: countrySelected,
                                                birthdayDate: birthdayDate.toLocaleString().split(',')[0].split(' ')[0],
                                              });
                                            }
                                          }
                                        >
                                            <td>{userInfo.firstName} miau {userInfo.lastName}</td>
                                            <td>{userInfo.firstName}</td>
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