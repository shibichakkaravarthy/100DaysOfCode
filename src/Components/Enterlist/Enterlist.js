import React from 'react';
import './Enterlist.css'

const Enterlist = ({i, name, price, quantity, amount, total}) => {
	return(
		<div>
			<ul id='enter'>
				<li>{i}</li>
				<li>{name}</li>
				<li>{price}</li>
				<li>{quantity}</li>
				<li>{amount}</li>
			</ul>

			<div id='total'>
				Grand total = {total}
			</div>
		</div>
	);
} 

export default Enterlist;