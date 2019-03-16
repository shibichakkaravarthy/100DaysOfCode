import React from 'react';

const Card = (props) => {
	const styles = {
		container: {
			borderRadius: '10px',
			border: '1px solid #ccc',
			boxShadow: '3px 6px 30px -10px #000',
			margin: '20px 10px',
			minWidth: '30%',
			paddingBottom: '10px',
			overflow: 'hidden',
			cursor: 'pointer'
		},

		containerHeading: {
			position: 'relative',
			backgroundColor: 'blue',
			color: 'white',
			top: '0px',
			left: '0px',
			width: '100%',
			borderBottom: '1px solid #ccc',
			textAlign: 'center',
			marginBottom: '10px',
			padding: '10px 0px'

		}

	}

	return(
		<div style={styles.container} >
			<div style={styles.containerHeading} >{props.heading}</div>
			<div>{props.children}</div>
		</div>
	);
} 

export default Card;