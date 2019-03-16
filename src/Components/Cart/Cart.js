import React from 'react';
import Cartlist from './CartList';
import '../Enterlist/Enterlist.css';

const Cart = ({ items, total, onSaving }) => {

	return(
		<div style={{width: '70%'}}>
			<table id='enter' >
				<tbody>
					<tr>
						<td style={{width: '5%'}}>S No</td>
						<td style={{width: '30%', cursor: 'pointer'}}>Name</td>
						<td style={{width: '10%', marginLeft: '40px'}}>Price</td>
						<td style={{width: '10%', marginLeft: '20px'}}>Quantity</td>
						<td style={{width: '10%', textAlign: 'right'}}>Amount</td>
					</tr>
				</tbody>
			</table>

			{
          items.map((obj,i) => {
	          return( 
	            <Cartlist onSaving = {onSaving}  name = {items[i].name} i={i+1} price = {items[i].price} quantity = {items[i].quantity} amount = {items[i].amount} key={i} total = {total}/>
	          ); 
          })
        }
		</div>
	);
}

export default Cart;