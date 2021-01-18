import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/news" className="nav-links">
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/membership" className="nav-links">
                            Membership
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/board" className="nav-links">
                            Board of Directors
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/committees" className="nav-links">
                            Committees
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/calendar" className="nav-links">
                            Calendar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/newletters" className="nav-links">
                            Newsletters
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar
