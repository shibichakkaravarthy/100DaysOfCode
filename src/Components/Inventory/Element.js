import React from 'react';
import './Element.css';

class Element extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			stock: 0
		}
	}

	stockf =  (event,name) => {
		console.log(event.target.value,name);
	}

	reorderf = (event, name) => {
		console.log(event.target.value, name)
	}
	render() {
		const {name, stock, reorder,i} = this.props;
		return(
			<div style={{margin: '10px auto'}}>
				<ul>
					<li id='index'>{i}</li>
					<li id='name'>{name}</li>
					<li><input id='stock' type='number' placeholder={stock}onChange={(event) => this.stockf(event,name)} /></li>
					<li><input id='reorder' type='number' placeholder={reorder}onChange={(event) => this.stockf(event,name)} /></li>
				</ul>
			</div>
		);
	}
}

export default Element;