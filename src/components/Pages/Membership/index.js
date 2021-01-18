import React from 'react';

import lily from '../../../img/single-lily.png';
import './style.scss';

const Membership = () => {
	return (
		<div className='membership text-center'>
			<h2 className='heading heading-primary'>Membership</h2>
			<p>
				To receive information about becoming a member of the Norwood Evening
				Garden Club please contact{' '}
				<a
					className='link'
					href='mailto:email@address.com?subject=Gardening Club'
				>
					Membership Chair
				</a>
			</p>
			<p>
				Meetings are held in the Carriage House at the First Baptist Church, 71
				Bond Street in Norwood on the last Tuesday of each month, beginning at
				6:45pm.
			</p>
			<p>
				Besides attending meetings, each member is required to serve actively on
				one project committee and one civic beautification committee, provide
				refreshments for one meeting and participate in our annual spring plant
				sale.
			</p>
			<img className='img' src={lily} alt='Lily' />
		</div>
	);
};

export default Membership;
