import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

const TableHeader = () => {
    return (
        <thead>
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
        <tr key={index}>
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