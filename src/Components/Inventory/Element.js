import React from 'react';
import './Element.css';

const Element = ({name, stock, reorder}) => {
	return(
		<div style={{margin: '10px auto'}}>
			<ul>
				<li id='name'>{name}</li>
				<li><input id='stock' type='number' value={stock} /></li>
			</ul>
		</div>
	);
}

export default Element;