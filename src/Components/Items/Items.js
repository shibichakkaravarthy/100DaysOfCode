import React from 'react';
import './Items.css';

const Items = () => {
	return(
		<div className='list'>
			<ul id='heading'>
				<li>S no</li>
				<li>Name</li>
				<li>Price</li>
				<li>Quantity</li>
				<li>Amount</li>
			</ul>
		</div>
	);
}

export default Items;