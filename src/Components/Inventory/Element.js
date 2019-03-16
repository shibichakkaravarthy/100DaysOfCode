import React from 'react';
import './Element.css';

class Element extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			stock: 0,
			reorder: 0
		}
	}

	stockf =  (event,name) => {
		this.setState({
			name: name,
			stock: event.target.value
		})
	}

	reorderf = (event, name) => {
		this.setState({
			name: name,
			reorder: event.target.value
		})	
	}

	render() {
		const {name, stock, reorder,i} = this.props;
		return(
				<table id='element' style={{width: '100%'}}>
					<tbody>
						<tr>
							<td id='invenelem' style={{width: '10%'}}>{i}</td>
							<td id='invenelem' style={{width: '60%'}}>{name}</td>
							<td id='invenelem' style={{width: '10%'}}>{stock}</td>
							<td id='invenelem' style={{width: '10%'}}>{reorder}</td>
						</tr>
					</tbody>
				</table>
		);
	}
}

export default Element;