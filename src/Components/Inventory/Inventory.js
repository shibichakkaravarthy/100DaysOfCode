import React, {Component} from 'react';
import Element from './Element';
import Button from '../Gen/Button';
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

		const routing = () => {
			console.log('HIIYAA');
			onRouting('stockentry');
		}

		return(
			<div style={{width: '70%', margin: '10px auto', marginBottom: '100px'}}>

				<div style = {{float: 'right'}}>
					<div onClick = {routing} ><Button category = 'MEDIUM PRIMARY' text = 'File Stock Entry' /></div>
					<div><Button category = 'MEDIUM PRIMARY' text = 'File Bill Return' /></div>
				</div><br />
				<br />
				<table id='hoe' style={{width: '100%'}}>
					<tbody>
						<tr>
							<th id = 'inventh' style={{width: '10%'}}>Id</th>
							<th id = 'inventh' style={{width: '60%'}}>Name</th>
							<th id = 'inventh' style={{width: '10%'}}>Stock</th>
							<th id = 'inventh' style={{width: '10%'}}>Reorder</th>
						</tr>
					</tbody>
				</table>
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