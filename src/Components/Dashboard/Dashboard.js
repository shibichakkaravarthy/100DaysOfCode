import React from 'react';
import Card from './Card';
import {Group, Cell} from './Components.js';


const styles = {
	containerhead: {
		paddingLeft: '10px',
		borderBottom: '1px solid #aaa',
		fontSize: '25px'
	}
}

class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			billedItems: [],
			staffs: [],
			customer: [],
			expense: [],
			billedToday: [],
			date: '',
			month: '',
			day: ''
		}
	}

	date = () => {
			const today = new Date();
			const day = today.getDay();
			const dat = today.getDate();
			const month = today.getMonth();

			if(day === 0) {
				this.setState({day: 'Sunday'})
			}

			else if(day === 1) {
				this.setState({day: 'Monday'})
			}

			else if(day === 2) {
				this.setState({day: 'Teusday'})
			}

			else if(day === 3) {
				this.setState({day: 'Wednesday'})
			}

			else if(day === 4) {
				this.setState({day: 'Thursday'})
			}

			else if(day === 5) {
				this.setState({day: 'Friday'})
			}			

			else if(day === 6) {
				this.setState({day: 'Saturday'})
			}

			else {
				this.setState({day: 'Unable to get Day :('})
			}

			if (month === 0) {
				this.setState({month: 'January'})
			}

			else if( month === 1) {
				this.setState({month: 'Febraury'})
			}

			else if( month === 2) {
				this.setState({month: 'March'})
			}

			else if( month === 3) {
				this.setState({month: 'April'})
			}

			else if( month === 4) {
				this.setState({month: 'May'})
			}

			else if( month === 5) {
				this.setState({month: 'June'})
			}

			else if( month === 6) {
				this.setState({month: 'July'})
			}

			else if( month === 7) {
				this.setState({month: 'August'})
			}

			else if( month === 8) {
				this.setState({month: 'September'})
			}

			else if( month === 9) {
				this.setState({month: 'October'})
			}

			else if( month === 10) {
				this.setState({month: 'November'})
			}

			else if( month === 11) {
				this.setState({month: 'December'})
			}

			else{
				this.setState({month: 'Unable to get Month'})
			}

			this.setState({date: dat});
		}

	componentDidMount() {
		this.date();

	}


	componentDidUpdate() {
		console.log(this.state);
	}

	render() {
		return (
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
				<div style={{width: '20%'}} >
					<Group>
						<Cell>Customers</Cell>
						<Cell>Staffs</Cell>
						<Cell>Suppliers</Cell>
					</Group>

					<Group>
						<Cell>Sold Bills</Cell>
						<Cell>Returned Bills</Cell>
						<Cell>Expenses</Cell>
					</Group>
				</div>

				<div style={{width: '70%'}} >
					<div style={{width: '100%', backgroundColor: '#6441A5', color: '#fff', textAlign: 'left', height: '200px', display: 'block'}} >
						<span style={{position: 'relative', top: '40px', left: '40px', fontSize: '30px'}} > {this.state.day} </span><br />
						<span style={{position: 'relative', top: '40px', left: '40px', fontSize: '20px'}}>{`${this.state.date}, ${this.state.month}`}</span>
					</div>

					<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}} >
							<Card heading='Sales'>Sales</Card>
							<Card heading='Salary'>Salary</Card>
							<Card heading='Expense'>Expense</Card>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;