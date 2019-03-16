import React from 'react';
import './Enterlist.css'

const Enterlist = ({quantityChange, removeEntry, i, name, price, quantity, amount, total, onRouting}) => {
	return(
		<div>
			<table id='enter' >
				<tbody>
					<tr>
						<td style={{width: '5%'}}>{i}</td>
						<td style={{width: '30%', cursor: 'pointer'}} onClick={() => removeEntry(i-1)} >{name}</td>
						<td style={{width: '10%', marginLeft: '40px'}}>{price}</td>
						<td style={{width: '10%', marginLeft: '20px'}}><input onChange={(event) => quantityChange(i, event)} type='number' value={quantity} style={{width: '50%'}}/></td>
						<td style={{width: '10%', textAlign: 'right'}}>{amount}</td>
					</tr>
				</tbody>
			</table>

			<div id='total'>
				<div id='paybutton' onClick={() => onRouting('cart')}>Pay</div>
				Grand total = {total}
			</div>
		</div>
	);
} 

export default Enterlist;