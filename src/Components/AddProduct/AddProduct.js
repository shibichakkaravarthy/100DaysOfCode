import React from 'react';
import './AddProduct.css';
import {
      PopupboxManager,
      PopupboxContainer
    } from 'react-popupbox';
import '../react-popupbox.css'

class AddProduct extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			price: 0,
			inven: false,
			stock: 0,
			status: '',
			msg: '',
			stit: ''
		}
	}

	openPopupbox() {
		const content = (
			<div>
				{this.state.msg}
			</div>
		)

		PopupboxManager.open({ 
			content,
			config: {
				titleBar: {
					className: this.state.status,
					enable: true,
					text: this.state.stit,
					closeButton: true
				},
				escClose: true,
				overlayClose: true
			} })

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
		if (this.state.name === '') {
				this.setState({
					status: 'ERROR',
					stit: 'Error!',
					msg: `Product Name could not be empty!`
				})
				console.log(this.state)
				this.openPopupbox()
			}
		else {
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
				if(prod.code === '23505') {
					this.setState({
						status: 'ERROR',
						stit: 'Error!',
						msg: `Product ${this.state.name} already Exists!`
					})
				}

				else if(prod.code === '22P02') {
					this.setState({
						status: 'ERROR',
						stit: 'Error!',
						msg: `Please enter the Price Correctly!`
					})
				}

				else {
					this.setState({
						status: 'SUCCESS',
						stit: 'Success!',
						msg: `Product ${this.state.name} is Successfully added to the Product's List!`
					})
				}
				console.log(prod)
				this.openPopupbox()
			})
		}
	}	

	componentDidUpdate() {
			if(this.state.inven === true) {
				let stock = parseInt(prompt("Stock", 0))
				this.setState({stock: stock});
				this.setState({inven: !this.state.inven});
			}

			console.log(this.state);
		}

	render() {
		return (
			<div>
				<div id='bg'>
					<form id='bg'>
						<input id='name' ref='name' type='text' placeholder = 'Product Name' onChange = {this.productAddname}/>
						<input id = 'price' type='number' placeholder = 'Price' onChange = {this.productAddprice}/>
						<label>
							<input id = 'invencheck' type='checkbox' onChange = {() => {this.setState({inven: !this.state.inven})}}/>
							Add To Inventory
						</label>
						<div id = 'add' onClick = { this.productSubmit } > + </div>
					</form>
				</div>
				<PopupboxContainer />
			</div>
		);
	}


}

export default AddProduct;