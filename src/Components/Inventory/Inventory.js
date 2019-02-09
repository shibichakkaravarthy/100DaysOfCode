import React, {Component} from 'react';
import list from '../Products/list';
import Element from './Element';

class Inventory extends Component {
	constructor() {
		super();
		this.state = {
			id: 0,
			name: '',
			stock: 0
		}
	}

	render() {
		return(
			<div style={{width: '70%', margin: '10px auto'}}>
				{
					list.map((obj,i) => {
						return(
							<Element name = {list[i].name} stock = {list[i].stock} reorder = {list[i].reorder} />
						);
					})
				}
			</div>
		);
	}


}

export default Inventory;