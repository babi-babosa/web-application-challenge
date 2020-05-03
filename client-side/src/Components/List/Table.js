import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { messageService } from '../../Services/messaging';
import './listComponent.css';

const TableHeader = () => {
    return (
        <thead className="table-head" >
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Birthday</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.usersData.map((row, index) => {
        return ( 
            <tr className="click-me" 
                key={index}
                onClick={() => {
                    messageService.sendMessage(`Hello ${row.firstName} ${row.lastName} from ${row.country}.`);
                }}
            >
                <td>{row.firstName} {row.lastName}</td>
                <td>{row.country}</td>
                <td>{row.birthdayDate}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class UseTable extends Component {
    render() {
        const { usersData } = this.props
        console.log("ola", usersData);
        return (
            <Table responsive>
                <TableHeader />
                <TableBody usersData={usersData} />
            </Table>
        )
    }
}

export default UseTable;