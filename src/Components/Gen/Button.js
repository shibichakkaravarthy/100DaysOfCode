import React from 'react';
import './Button.css';

const Button = ({category, text}) => {
	return(
		<div className = {category} id = 'button'>{text}</div>
	);
}

export default Button;