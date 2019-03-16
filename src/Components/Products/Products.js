import React from 'react';
import Card from './Card';
import './Products.css';

const Products = ({onItemAdd, product}) => {

	const products = product.map((user, i) => {

		const { name, price, id, inven} = product[i];

		return( 
			<Card 
				key={i} 
				name={name} 
				price={price} 
				id={id}
				inven={inven}
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