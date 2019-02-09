import React from 'react';
import './Enterlist.css'

const Enterlist = ({i, name, price, quantity, amount, total}) => {
	return(
		<div>
			<ul id='enter'>
				<li style={{width: '10%'}}>{i}</li>
				<li style={{width: '50%'}}>{name}</li>
				<li style={{width: '10%'}}>{price}</li>
				<li style={{width: '10%'}}>{quantity}</li>
				<li style={{width: '10%'}}>{amount}</li>
			</ul>

			<div id='total'>
				Grand total = {total}
			</div>
		</div>
	);
} 

export default Enterlist;