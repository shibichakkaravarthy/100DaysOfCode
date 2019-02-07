import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div>
			<div className='name'>Master Biller</div>
			<div className='nav'>
				<ul>
					<li>DashBoard</li>
					<li>Billing</li>
					<li>Inventory</li>
					<li>Expenses</li>
					<li>Tokens</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;