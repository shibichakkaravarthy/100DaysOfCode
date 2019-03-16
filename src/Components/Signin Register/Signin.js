import React from 'react';
import './Signin.css';

const Signin = () => {
	return(
		<div className='container'>
			<div className='sub-container'>
				<div className='heading'>Signin</div>
				<div className='content'>
					<div><input type='text' placeholder='E-mail' className='email' /></div><br />
					<div><input type='password' placeholder='Password' /></div>
				</div>
			</div>
			<div className='sub-container'>
				<div className='heading'>Register</div>
				<div className='content'></div>
			</div>
		</div>

	);
}

export default Signin;