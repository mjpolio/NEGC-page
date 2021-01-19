import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Store = () => {
	return (
		<div className='store'>
			<h2 className='heading heading-primary'>
				Our Store
			</h2>
			<div className="store-list">
				<li className="store-item">
					<Link to="/cookbooks">Cookbooks</Link>
				</li>
				<li className="store-item">Aprons</li>
				<li className="store-item">Gloves</li>
			</div>
			
		</div>
	);
};

export default Store;
