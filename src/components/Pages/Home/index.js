import React from 'react';

import './style.scss';

const Home = () => {
	return (
		<div className='body-section'>
			<h2>Norwood Evening Gardening Club</h2>
			<p>
				The Norwood Evening Garden Club brings together enthusiastic gardeners
				from Norwood, Walpole, Westwood and surrounding towns for the goals of:
				<ul>
					<li>Learning more about horticulture and floral design</li>
					<li>
						Sharing knowledge and expertise with each other and with the public
					</li>
					<li>Making our communities more beautiful through civic projects</li>
				</ul>
			</p>
			<p>
				The public is cordially invited to attend any of our meetings held at
				the Carriage House at the First Baptist Church, 71 Bond Street in
				Norwood (unless noted as members-only) featuring an outstanding array of
				regional experts on topics in horticulture, floral design and
				environmental issues. Our meetings are generally held on the last
				Tuesday of the month from September through May.
			</p>
			<p>
				For further information, contact membership@norwoodeveninggardenclub.com
			</p>
		</div>
	);
};

export default Home;
