import React from 'react';

import './style.scss';

function Footer() {
	const date = new Date();
	return (
		<div className='footer-container'>
			<p>© Norwood Evening Garden Club {date.getFullYear()}</p>
			<p>webmaster@norwoodeveninggardenclub.com</p>
		</div>
	);
}

export default Footer;
