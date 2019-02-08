import React from 'react';
import list from './list.js';
import Card from './Card';
import './Products.css';

const Products = ({onItemAdd}) => {

	const products = list.map((user, i) => {

		const { name, price, id} = list[i];

		return( 
			<Card 
				key={i} 
				name={name} 
				price={price} 
				id={id}
				itemAdd={onItemAdd}
			/>
		);
	})

	return(
		<div className='menu'>
			{products}
		</div>
	);

}

export default Products;