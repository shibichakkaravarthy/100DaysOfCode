import React from 'react';
import './Components.css';

const Group = (props) => {
	return(
		<div className='GROUP'>
			{props.children}
		</div>
	);
}

const Cell = (props) => {
	return(
		<div className='CELL'>
			{props.children}
		</div>
	);
}

export {Group, Cell};