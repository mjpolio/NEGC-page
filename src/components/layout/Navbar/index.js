import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<ul>
					<li className='navbar-item'>
						<Link to='/' className='navbar-links'>
							Home
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/about' className='navbar-links'>
							About
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/news' className='navbar-links'>
							News
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/membership' className='navbar-links'>
							Membership
						</Link>
					</li>
					<li className="navbar-item">
                        <Link to="/board" className="navbar-links">
                            Board of Directors
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/committees" className="navbar-links">
                            Committees
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/calendar" className="navbar-links">
                            Calendar
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/newletters" className="navbar-links">
                            Newsletters
                        </Link>
                    </li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
