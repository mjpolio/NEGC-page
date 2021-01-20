import React from 'react';
import { SiLeaflet } from 'react-icons/si';
import { Link } from 'react-router-dom';

import Pdf01 from '../Horticulture/pdfs/01 Sept Hort Thoughts.pdf';
import Pdf02 from '../Horticulture/pdfs/02 HORTICULTURE_NOTES_april_2013.pdf';
import Pdf03 from '../Horticulture/pdfs/03 SEPTEMBER  HORTICULTURE NOTES.pdf';
import Pdf04 from '../Horticulture/pdfs/04 OCTOBER HORTICULTURE NOTES.pdf';
import Pdf05 from '../Horticulture/pdfs/05 Leaf Dropping and Leaf Hanging.pdf';
import './styles.scss';

const Horticulture = () => {
	return (
		<div>
			<div className='heading heading-primary'>
				Horticulture Notes
				<div className='underline'></div>
			</div>
			<div className='horticulture-notes'>
				<ul>
					<li className='horticulture-item'>
						<Link
							to={{ pathname: Pdf05 }}
							target='_blank'
							className='horticulture-link'
						>
							<SiLeaflet className='horticulture-icon' />
							Leaf Dropping and Leaf Hanging in Japanese Maple
						</Link>
					</li>
					<li className='horticulture-item'>
						<Link
							to={{ pathname: Pdf04 }}
							target='_blank'
							className='horticulture-link'
						>
							<SiLeaflet className='horticulture-icon' />
							Oriental Bittersweet
						</Link>
					</li>
					<li className='horticulture-item'>
						<Link
							to={{ pathname: Pdf03 }}
							target='_blank'
							className='horticulture-link'
						>
							<SiLeaflet className='horticulture-icon' />
							Choosing Native Plants
						</Link>
					</li>
					<li className='horticulture-item'>
						<Link
							to={{ pathname: Pdf02 }}
							target='_blank'
							className='horticulture-link'
						>
							<SiLeaflet className='horticulture-icon' />
							Tips on Garden Tool Care
						</Link>
					</li>
					<li className='horticulture-item'>
						<Link
							to={{ pathname: Pdf01 }}
							target='_blank'
							className='horticulture-link'
						>
							<SiLeaflet className='horticulture-icon' />
							Autumn Thoughts
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Horticulture;
