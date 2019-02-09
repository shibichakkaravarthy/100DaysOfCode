import React from 'react';
import './Items.css';

const Items = () => {
	return(
		<div className='list'>
			<ul id='heading'>
				<li style={{width: '10%'}}>S no</li>
				<li style={{width: '30%'}}>Name</li>
				<li style={{width: '20%'}}>Price</li>
				<li style={{width: '20%'}}>Quantity</li>
				<li style={{width: '10%'}}>Amount</li>
			</ul>
		</div>
	);
}

export default Items;