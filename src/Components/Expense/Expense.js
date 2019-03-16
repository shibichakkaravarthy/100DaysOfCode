import React from 'react';
import Button from '../Gen/Button';
import Table from './Table.js';
import './Expense.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import '../react-popupbox.css'

class Explist extends React.Component {
	constructor() {
		super();
		this.state = {
			exp: [],
			popstatus: 'FILE'
		}
	}
	
	componentDidMount() {
		fetch('http://localhost:3000/exp')
		.then(response => response.json())
		.then(exp => {
			this.setState({exp: exp})
			console.log('explist', this.state.exp);
		})
	}

	openPopupbox() {
		console.log('hi');
		const content = (
					<div>
						<form>
							<label>Title</label><br/>
							<input type='text' /><br/><br/>

							<label>Description</label><br/>
							<textarea  /><br/>
						</form>

						<Button category='PRIMARY' text='File Expense' />
						<div>Press Esc to Close</div>
					</div>
		)

		PopupboxManager.open({ 
			content,
			config: {
				titleBar: {
					className: 'BLUE',
					enable: true,
					text: 'File Expense',
					closeButton: true
				},
				escClose: true,
				overlayClose: true
			} })

	}



	render() {
		return(
			<div>
				<div>
					<Button category = 'MEDIUM PRIMARY' text = 'File Expense' />
					<Button category = 'MEDIUM PRIMARY' text = 'Approve Expense' />
					<Button category = 'MEDIUM PRIMARY' text = 'Re-file Expense' />
				</div>

				<table id='exptable' className='thb' style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderTop: '1px solid #999', borderBottom: '1px solid #999'}} >
					<tbody>
						<tr>
							<th style={{width: '10%'}}>Id</th>
							<th style={{width: '15%'}}>Date</th>
							<th style={{width: '15%'}}>Title</th>
							<th style={{width: '50%'}}>Description</th>
							<th>Amount</th>
						</tr>
					</tbody>
				</table>

				{
					this.state.exp.map((obj,i) => {
						return(
							<Table key={i} id={obj.id} status = {obj.status} title = {obj.title} date = {obj.date} description = {obj.description} amount = {obj.amount} />
						);
					})
				}
				<div id='add' onClick={this.openPopupbox}>
					<Button category='ADD-ROUND' text='+' />
				</div>

				<PopupboxContainer />
			</div>
		);
	}
}

export default Explist;