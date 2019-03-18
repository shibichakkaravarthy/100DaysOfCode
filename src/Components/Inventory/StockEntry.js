import React, {Component} from 'react';
import Button from '../Gen/Button.js'

const styles = {
	container: {
		width: '100%',
		height: 'auto',
		padding: '10px',
		margin: '0',
		display: 'flex',
		flexWrap: 'wrap'
	},

	children: {
		width: '45%',
		height: 'auto',
		padding: '10px',
		textAlign: 'left'
	},

	inputs: {
		margin: '10px',
		border: 'none',
		outline: 'none',
		borderRadius: '5px',
		padding: '5px',
		border: '1px solid #bbb',
		width: '70%'
	}
}

class StockEntry extends Component {
	constructor() {
		super();
		this.state = {
			stock: [],
			name: '',
			quan: 0,
			mrp: 0,
			rate: 0,
			tvalue: 0,
			total: 0
		}
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	entry = () => {
		let stk = this.state.stock.concat({
			name: this.state.name,
			quan: this.state.quan,
			mrp: this.state.mrp,
			tvalue: this.state.tvalue

		});

		this.setState({stock: stk})
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	render() {
		return(
			<div id='container' style={styles.container} >
				<div id='form' style={styles.children} >
					<form>
						<input type='text'  name='name' placeholder='Name' style={styles.inputs} onChange = {this.onInputChange} /> <br />
						<input type='number' name='quan' placeholder='Quantity' style={styles.inputs} onChange = {this.onInputChange} /> <br />
						<input type='number' name='mrp' placeholder='MRP' style={styles.inputs} onChange = {this.onInputChange} /> <br />
						<input type='number' name='tvalue' placeholder='Total Value' style={styles.inputs} onChange = {this.onInputChange} /> <br />
					</form>

					<div onClick = {this.entry} ><Button category = 'MEDIUM PRIMARY' text = 'Submit' onClick = {this.entry}  /></div>
				</div>

				<div id='elements' style={styles.children}>
					<table style={{width: '100%'}} >
						<tbody>
							<tr>
								<th>S.No</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>T.Value</th>
							</tr>
							{
								this.state.stock.map((elem,i) => {
									return(
										<tr>
											<td>{i+1}</td>
											<td>{elem.name}</td>
											<td>{elem.quan}</td>
											<td>{elem.tvalue}</td>
											<td>{elem.cgst}</td>
											<td>{elem.sgst}</td>
											<td>{elem.total}</td>
										</tr>
									);
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

}

export default StockEntry;