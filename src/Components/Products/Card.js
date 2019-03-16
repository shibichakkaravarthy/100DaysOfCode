import React from 'react';
import './Products.css'

const Card = ({ name, price, id,itemAdd, inven }) => {

	return(
		<div className='card' onClick={() => itemAdd(name,price,inven)}>
			<div id='id'>{id}</div>
			<div id='name'>{name}</div>
			<div id = 'price'>{price}</div>
		</div>
	);

}

export default Card;