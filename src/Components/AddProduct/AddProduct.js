import React from 'react';
import './AddProduct.css';

class AddProduct extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			price: 0,
			inven: false,
			stock: 0
		}
	}

	productAddname = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	productAddprice = (event) => {
		this.setState({
			price: event.target.value
		})
	}

	productSubmit = () => {
		fetch('http://localhost:3000/addproduct', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				price: this.state.price,
				inven: this.state.inven,
				stock: this.state.stock
			})
		}).then(res => res.json()).then(prod => {
			console.log(prod);
			this.setState({
				name: '',
				price: 0,
				inven: false,
				stock: 0
			})
		})
	}	

	componentDidUpdate() {
			if(this.state.inven === true) {
				let stock = parseInt(prompt("Stock", 0))
				this.setState({stock: stock});
				this.setState({inven: !this.state.inven});
			}

			console.log(this.state.inven);
		}

	render() {
		const { addProduct } = this.props;
		return (
			<div id='bg'>
				<input id='name' ref='name' type='text' placeholder = 'Product Name' onChange = {this.productAddname}/>
				<input id = 'price' type='number' placeholder = 'Price' onChange = {this.productAddprice}/>
				<label>
					<input id = 'invencheck' type='checkbox' onChange = {() => {this.setState({inven: !this.state.inven})}}/>
					Add To Inventory
				</label>
				<div id = 'add' onClick = { this.productSubmit } > + </div>
			</div>
		);
	}


}

export default AddProduct;