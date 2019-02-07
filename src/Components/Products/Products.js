import React from 'react';
import list from './list.js';
import Card from './Card';
import './Products.css';

const Products = ({itemAdd}) => {

	const products = list.map((user, i) => {

		const { name, price, id} = list[i];

		return( 
			<Card 
				itemAdd = {itemAdd}
				key={i} 
				name={name} 
				price={price} 
				id={id}
				onClick = {itemAdd(name, price)}
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