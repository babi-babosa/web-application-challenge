import React from 'react';

const TableBody = props => {
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

  
export default TableBody;