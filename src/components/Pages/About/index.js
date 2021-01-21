import React from 'react';
import { GiSpotedFlower } from 'react-icons/gi';

import './style.scss';

const About = () => {
	return (
		<div className='about-section'>
			<div className='about-left'>
				<div className='about-image img1'></div>
				<div className='about-image img2'></div>
				<div className='about-image img3'></div>
			</div>
			<div className='about-text'>
				<h2 className='heading heading-primary'>
					About Us
					<div className='underline'></div>
				</h2>
				<p>The Norwood Evening Garden Club is a member of:</p>
				<ul className='list'>
					<li>
						<GiSpotedFlower className='list-icon' />
						The Garden Club Federation of Massachusetts, Inc.
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						New England Region of Garden Clubs
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						National Garden Clubs, Inc.
					</li>
				</ul>

				<p>
					Members of the Norwood Evening Garden Club have been providing
					education and public beautification in Norwood and its surrounding
					communities since 1996. The Club is open to novice and expert
					gardeners, and draws its members from Norwood, Walpole, Westwood,
					Dedham, Medfield, Randolph and Stoughton.
				</p>
				<p>
					For information about the club, contact{' '}
					<a
						href='mailto:meheike59@gmail.com?subject=Gardening Club Membership'
						className='link'
					>
						Mary Ellen Heike
					</a>
				</p>
			</div>
			<div className='about-right'>
				<div className='about-image img-right'></div>
			</div>
		</div>
	);
};

export default About;
