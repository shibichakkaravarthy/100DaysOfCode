import React from 'react';

const styles = {
	head: {
		fontSize: '30px',
		fontWeight: 'bolder',
		color: '#000',
	},

	motiv: {
		fontSize: '15px',
		color: '#bbb'
	}
}

const Forbidden = () => {
	return(
		<div>
			<div style={styles.head}> This Page is Forbidden For You!!! </div>
			<div style={styles.motiv} >Work Hard and Become an Admin of the Shop... I will will be glad to show you this page!</div>
		</div>
	);
}