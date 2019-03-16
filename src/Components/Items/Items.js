import React from 'react';
import './Items.css';

const Items = () => {
	return(
		<table className='list'>
			<tbody>
				<tr id='heading'>
					<th id='th' style={{width: '5%', textAlign: 'center'}}>S no</th>
					<th id='th' style={{width: '30%'}}>Name</th>
					<th id='th' style={{width: '10%'}}>Price</th>
					<th id='th' style={{width: '10%'}}>Quantity</th>
					<th id='th' style={{width: '10%'}}>Amount</th>
				</tr>
			</tbody>
		</table>
	);
}

export default Items;