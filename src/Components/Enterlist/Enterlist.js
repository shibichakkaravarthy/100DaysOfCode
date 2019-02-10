import React from 'react';
import './Enterlist.css'

const Enterlist = ({quantityChange, removeEntry, i, name, price, quantity, amount, total}) => {
	return(
		<div>
			<ul id='enter' >
				<li style={{width: '10%'}}>{i}</li>
				<li style={{width: '50%', cursor: 'pointer'}} onClick={() => removeEntry(i-1)} >{name}</li>
				<li style={{width: '10%'}}>{price}</li>
				<li style={{width: '10%'}}><input onChange={(event) => quantityChange(i)} type='number' value={quantity} style={{width: '50%'}}/></li>
				<li style={{width: '10%'}}>{amount}</li>
			</ul>

			<div id='total'>
				Grand total = {total}
			</div>
		</div>
	);
} 

export default Enterlist;