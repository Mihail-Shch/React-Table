import React from 'react';
import TableRow from './TableRow';
import '../Table.css';

function Table({ items, onSort, onClick, param, order }) {

    const Condition = () => {
        return (
            order === 'asc' ? <small>&nbsp; desc</small> : <small>&nbsp; asc</small>
        )
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSort('id')}>id
                    {
                            param === 'id' ? <Condition /> : ''
                        }
                    </th>
                    <th scope="col" onClick={() => onSort('firstName')} > First Name
                    {
                            param === 'firstName' ? <Condition /> : ''
                        }
                    </th>
                    <th scope="col" onClick={() => onSort('lastName')} > Last Name
                    {
                            param === 'lastName' ? <Condition /> : ''
                        }
                    </th>
                    <th scope="col" onClick={() => onSort('email')} > Email
                    {
                            param === 'email' ? <Condition /> : ''
                        }
                    </th>
                    <th scope="col" onClick={() => onSort('phone')} > Phone
                    {
                            param === 'phone' ? <Condition /> : ''
                        }
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item, index) => <TableRow key={index} {...item} item={item} onClick={onClick} />)
                }
            </tbody>
        </table>
    )
}

export default Table
