import React from 'react'

function TableRow({ id, firstName, lastName, email, phone, onClick, item }) {

    return (
        <tr onClick={() => onClick(item)}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            {/* <td>{`${city}, ${state}, ${streetAddress}, ${zip}`}</td> */}
        </tr>
    )
}

export default TableRow
