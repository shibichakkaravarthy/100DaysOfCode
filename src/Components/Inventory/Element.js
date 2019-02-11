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

	stockf =  (event) => {
		console.log(event.target.value);
	}
	render() {
		const {name, stock, reorder,i} = this.props;
		return(
			<div style={{margin: '10px auto'}}>
				<ul>
					<li id='index'>{i}</li>
					<li id='name'>{name}</li>
					<li id='oldstk'>{stock}</li>
					<li><input id='stock' type='number' onChange={() => this.stockf()} /></li>
				</ul>
			</div>
		);
	}
}

export default Element;