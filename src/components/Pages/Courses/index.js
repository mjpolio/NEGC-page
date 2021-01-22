import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Courses = () => {
	return (
		<>
			<h2 className='heading heading-primary'>
				Gardening and Horticultural Courses
				<div className='underline'></div>
			</h2>
			<div className='courses'>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Arnold Arboretum
						</h4>
					</div>

					<div className='courses-info'>
						<p>617-524-1718</p>
						<Link
							to={{ pathname: 'http://www.arboretum.harvard.edu' }}
							target='_blank'
						>
							www.arboretum.harvard.edu
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Garden Club Federation of Massachusetts
						</h4>
					</div>

					<div className='courses-info'>
						<p>781-237-0336</p>
						<Link to={{ pathname: 'http://www.gcfm.org' }} target='_blank'>
							www.gcfm.org
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Massachusetts Horticultural Society
						</h4>
					</div>

					<div className='courses-info'>
						<p>617-933-4900</p>
						<Link to={{ pathname: 'http://masshort.org' }} target='_blank'>
							www.masshort.org
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Massachusetts Master Gardener Association, Inc
						</h4>
						<h5 className='text-primary'>Master Gardener Program</h5>
					</div>
					<div className='courses-info'>
						<p>617-933-4900</p>
						<Link
							to={{ pathname: 'http://www.massmastergardeners.org/' }}
							target='_blank'
						>
							www.massmastergardeners.org
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							New England Wildflower Society
						</h4>
					</div>

					<div className='courses-info'>
						<p>508-877-7630</p>
						<Link to={{ pathname: ' http://www.newfs.org/' }} target='_blank'>
							www.newfs.org
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Norfolk County Agricultural High School
						</h4>
						<h5 className='text-primary'>Adult Education</h5>
					</div>

					<div className='courses-info'>
						<p>508-668-0268</p>
						<Link
							to={{ pathname: 'http://www.norfolkaggie.org/' }}
							target='_blank'
						>
							www.norfolkaggie.org
						</Link>
					</div>
				</div>
				<div className='line'></div>
				<div className='courses-item'>
					<div className='courses-name'>
						<h4 className='heading heading-tertiary text-secondary'>
							Tower Hill Botanic Garden
						</h4>
					</div>

					<div className='courses-info'>
						<p>508-869-6111</p>
						<Link
							to={{ pathname: 'https://www.towerhillbg.org/' }}
							target='_blank'
						>
							www.towerhillbg.org
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Courses;
