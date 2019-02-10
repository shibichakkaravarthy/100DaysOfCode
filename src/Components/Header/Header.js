import React from 'react';
import './Header.css';

const Header = ({onRouting}) => {
	return (
		<div>
			<div className='name'>Master Biller</div>
			<div className='nav'>
				<ul>
					<li onClick={() => onRouting('dash')}>DashBoard</li>
					<li onClick={() => onRouting('home')}>Billing</li>
					<li onClick={() => onRouting('inven')}>Inventory</li>
					<li onClick={() => onRouting('exp')}>Expenses</li>
					<li onClick={() => onRouting('token')}>Tokens</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;