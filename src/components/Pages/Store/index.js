import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { GiLargeDress, GiGloves } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';


const Store = () => {
	return (
		<div className='store'>
			<h2 className='heading heading-primary'>
				Our Store
			</h2>
			<div className="store-list">
				<li className="store-item">
					<Link to="/cookbooks">
					<FaBook className="store-icon" />
					Cookbooks
					</Link>
				</li>
				<li className="store-item" >
					<GiLargeDress className="store-icon" />
					Aprons
				</li>
				<li className="store-item">
					<GiGloves className="store-icon" />
					Gloves
				</li>
			</div>
			
		</div>
	);
};

export default Store;
