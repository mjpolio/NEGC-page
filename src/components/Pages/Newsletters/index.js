import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import spring2017 from './src/06 - NEGC SPRING 2017 Newsletter_final2.pdf';
import fall2016 from './src/05 - NEGC FALL 2016 Newsletter final.pdf';
import spring2015 from './src/04 - NEGC Spring 2015 Newsletter.pdf';
import fall2014 from './src/03- NEGC Special Travel EditionNewsletter.pdf';
import spring2014 from './src/02 - NEGCSpring 2014Newsletter.pdf';
import spring2013 from './src/01 - Newsletter_Feb_2013.pdf';



const Newsletters = () => {
	return (
		<div className='newsletters'>
			<h2 className='heading heading-primary'>
				Newsletters
				<div className='underline'></div>
			</h2>
			<div className="newsletters-item">
				<Link to={{ pathname: spring2017}} target="_blank" className="newsletters-link link">Spring 2017</Link>
			</div>
			<div className="newsletters-item">
				<Link to={{ pathname: fall2016}} target="_blank" className="newsletters-link link">Fall 2016</Link>
			</div>
			<div className="newsletters-item">
				<Link to={{ pathname: spring2015}} target="_blank" className="newsletters-link link">Spring 2015</Link>
			</div>
			<div className="newsletters-item">
				<Link to={{ pathname: fall2014}} target="_blank" className="newsletters-link link">Fall 2014</Link>
			</div>
			<div className="newsletters-item">
				<Link to={{ pathname: spring2014}} target="_blank" className="newsletters-link link">Spring 2014</Link>
			</div>
			<div className="newsletters-item">
				<Link to={{ pathname: spring2013}} target="_blank" className="newsletters-link link">Feb 2013</Link>
			</div>
		</div>
	);
};

export default Newsletters;
