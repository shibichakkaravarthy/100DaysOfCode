import React from 'react';
import Enterlist from '../Enterlist/Enterlist';

const Cart = ({ items, total, onRouting }) => {
	return(
		<div>
			{
          items.map((obj,i) => {
	          return( 
	            <Enterlist onRouting = {onRouting}  name = {items[i].name} i={i+1} price = {items[i].price} quantity = {items[i].quantity} amount = {items[i].amount} key={i} total = {total}/>
	          ); 
          })
        }
		</div>
	);
}

export default Cart;