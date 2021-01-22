import React from 'react';

import './style.scss';

const Calendar = () => {
	return (
		<div className='calendar'>
			<h2 className='heading heading-primary'>
				Monthly Program Calendar
				<div className='underline'></div>
			</h2>
			<p className='my-2'>
				Guests are welcome at all meetings except those noted as ' Members Only
				' meetings. Guests may register at the door. The guest donation is $5.00
				per meeting.
			</p>
			<h3 className='heading heading-tertiary'>
				Please come at 6:45 p.m. <br /> Carriage House at the First Baptist
				Church, 71 Bond Street in Norwood
			</h3>

			<p className='text-danger mt-3'>
				Please Note: Due to COVID all programs are 'Members Only'.
			</p>

			<table className='calendar-table'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Speaker/Event</th>
						<th>Topic</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>9/29/20</td>
						<td>Debbie Merriam</td>
						<td>Weeds & Invasives</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>10/27/20</td>
						<td>Joan Buttler</td>
						<td>The Magic of a Winter Garden</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>12/01/20</td>
						<td>Donna Lane</td>
						<td>Holiday Workshop</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>01/26/21</td>
						<td>Robert Gegear</td>
						<td>More than Just the Buzz: Gardening for Biodiversity</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>02/23/21</td>
						<td>Hannah Traggis</td>
						<td>Container Vegetable Garden</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>03/30/21</td>
						<td>Joann Vieira</td>
						<td>Trees and Shrubs for New England Gardens</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>TBD</td>
						<td>Art in Bloom</td>
						<td>Art in Bloom</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>04/27/21</td>
						<td>Jen Kettell</td>
						<td>Be a Pollinator Wingman</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>05/08/21</td>
						<td>Plant sale</td>
						<td>Plant Sale</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>05/08/21</td>
						<td>Plant sale</td>
						<td>Plant Sale</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>05/25/21</td>
						<td>Joe Biagioni</td>
						<td>Drip Irrigation Workshop</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
					<tr>
						<td>TBD</td>
						<td>Annual Meeting</td>
						<td>Annual Meeting</td>
						<td>
							<button className='btn-text'>More Info &rarr;</button>
						</td>
					</tr>
				</tbody>
			</table>
			<h3 className='heading heading-secondary'>Norwood Evening Garden Club</h3>
			<p>
				The Norwood Evening Garden Club has been providing education and public
				beautification in Norwood and Walpole Since 2096. Open to novice and
				expert gardeners, the Club is a member of The Garden Club Federation of
				Massachusetts, Inc., New England Region, and National Garden Clubs, Inc.
				and draws its members from the communities of Norwood, Walpole,
				Westwood, Dedham, Medfield, Stoughton and Randolph.
			</p>
			<p>
				For information about joining the Norwood Evening Garden Club, contact{' '}
				<a
					href='mailto:donnamlane@verizon.net?subject=Gardening Club Information'
					className='link'
				>
					Donna Lane
				</a>
			</p>
		</div>
	);
};

export default Calendar;
