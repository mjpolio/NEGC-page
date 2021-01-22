import React from 'react';
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
				<a href={spring2017} className="newsletters-link">Spring 2017</a>
			</div>
			<div className="newsletters-item">
				<a href={fall2016} className="newsletters-link">Fall 2016</a>
			</div>
			<div className="newsletters-item">
				<a href={spring2015} className="newsletters-link">Spring 2015</a>
			</div>
			<div className="newsletters-item">
				<a href={fall2014} className="newsletters-link">Fall 2014</a>
			</div>
			<div className="newsletters-item">
				<a href={spring2014} className="newsletters-link">Spring 2014</a>
			</div>
			<div className="newsletters-item">
				<a href={spring2013} className="newsletters-link">Feb 2013</a>
			</div>
		</div>
	);
};

export default Newsletters;
