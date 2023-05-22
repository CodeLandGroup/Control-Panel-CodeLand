import React from 'react'

export default function TransActionItem(props) {
    return (
        <tr className='transAction-row'>
            <td>
                <h3>{props.name}</h3>
            </td>
            <td>1401/02/31</td>
            <td>23,000</td>
            <td>
                <button className={`status-btn ${props.className}`}>ناموفق</button>
            </td>
        </tr>
    )
}
