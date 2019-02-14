import React, {Component} from 'react';
import Element from './Element';
import './Inventory.css';

class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			name: '',
			stock: 0
		}
	} 

	render() {

		const {product,onRouting} = this.props;

		return(
			<div style={{width: '70%', margin: '10px auto'}}>
				{
					product.map((obj,i) => {
						return(
							<Element key={i} i={i+1} name = {product[i].name} stock = {product[i].stock} reorder = {product[i].reorder} />
						);
					})
				}

				<div className='addbutton' onClick = {() => onRouting('addprod')}><p>+</p></div>
			</div>
		);
	}


}

export default Inventory;