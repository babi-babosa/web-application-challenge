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
                    let date = row.birthdayDate.toLocaleString().split(',')[0].split(' ')[0].split('/');               
                    let month = date[0];
                    let day = date[1];
                    let year = date[2];
                    let age = Math.abs(parseInt(year) - new Date().getUTCFullYear());
                    messageService.sendMessage(`Hello ${row.firstName} ${row.lastName} from ${row.country}. On ${day} day of ${month} you will be ${age} years old.`);
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
        return (
            <Table responsive>
                <TableHeader />
                <TableBody usersData={usersData} />
            </Table>
        )
    }
}

export default UseTable;