import React from 'react';
import './Expense.css';

const Table = ({id, date, title, description, amount, status}) => {
	
	return (
		<table id='exptable' className = {status}>
			<tbody>
				<tr>
					<td id='td' style = {{width: '10%'}}>{id}</td>
					<td id='td' style = {{width: '15%'}}>{date}</td>
					<td id='td' style = {{width: '15%'}}>{title}</td>
					<td id='td' style = {{width: '50%'}}>{description}</td>
					<td id='td' >{amount}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;