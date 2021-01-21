import React from 'react';
import { GiSpotedFlower } from 'react-icons/gi';
import './style.scss';

const Committees = () => {
	return (
		<div className='committees'>
			<h2 className='heading heading-primary'>
				Committees
				<div className='underline'></div>
			</h2>

			<div className='committees-info'>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Awards
				</h3>
				<p>
					The Awards Committee is responsible for reviewing and understanding
					the requirements of all awards and grants open to the club by the
					Garden Club Federation of Massachusetts (GCFM). This information is
					detailed in the GCFM Yearbook. Having reviewed this information, the
					Awards Chair informs the Board of Directors of the awards for which
					the Club is eligible and suggests those that it should pursue.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Civic Beautification
				</h3>
				<p>
					This is an ongoing activity that is ultimately the responsibility of
					the entire club. Its objective is to identify, assess and select
					meritorious projects for garden development and/or restoration within
					the Towns of Norwood and Walpole, in the interest of civic
					beautification. Contributions of time and/or funding are made to
					accomplish the selected projects. <br /> Ongoing projects are:
				</p>
				<ul className='list'>
					<li>
						<GiSpotedFlower className='list-icon' />
						Francis William Bird Park
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						Walpole Library Rain Garden
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						Guild Square
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						Hawes Pool Park
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						Norwood Round
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						Washington and Cottage Streets
					</li>
					<li>
						<GiSpotedFlower className='list-icon' />
						F. Holland Day House
					</li>
				</ul>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Garden Therapy
				</h3>
				<p>
					The Garden Therapy Committee conducts two workshops for the elderly
					residents of the Ellis Rehabilitation and Nursing Center, with a theme
					appropriate to the season. These hands-on sessions result in
					seasonally-themed floral arrangements to brighten the participants'
					rooms.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Horticulture
				</h3>
				<p>
					The Horticulture Committee is responsible for educating the club about
					horticulture. Committee members attend horticulture meetings and
					activities where they collect information for the club's benefit. This
					committee also provides horticulture exhibits of general interest to
					the club.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Hospitality
				</h3>
				<p>
					The Hospitality Committee is responsible for bringing and serving
					refreshments at monthly meetings, selling raffle tickets, and
					maintaining nametags, the guest book and the attendance sheet. The
					monthly hospitality lead is responsible for providing the centerpiece
					for the serving table. Refreshments (food and beverages) are set up
					prior to the meeting and the committee cleans up after the meeting has
					adjourned. Each club member is required to provide refreshments for
					one monthly meeting during the program year.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Librarian
				</h3>
				<p>
					The Librarian has custody of the club's horticulture reference books
					and maintains records when books are borrowed and returned.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Membership
				</h3>
				<p>
					This committee is responsible for attracting new members as well as
					maintaining the database of contact information for current members.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Newsletter
				</h3>
				<p>
					The Newsletter is a quarterly publication that provides information to
					members about important upcoming programs and events, horticulture,
					club awards, calendar reminders and GCFM events and opportunities. The
					editor's responsibility is to solicit input from members, write and/or
					edit articles, organize and lay out the publication, and distribute it
					to members.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Programs
				</h3>
				<p>
					The Program Committee is responsible for investigating the
					availability and suitability of speakers and activities that would be
					of interest to the club members and the local community. Once
					identified, the committee puts together a balanced program for the
					year that includes workshops, lectures and field trips.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Publicity
				</h3>
				<p>
					Members of this committee publicize all club meetings and events.
					Their main responsibility is to prepare copy for local media
					(newspaper, radio, cable TV, internet and garden publications, as
					warranted) about monthly programs, and to promote special events.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Scholarship
				</h3>
				<p>
					A $1000 scholarship is awarded annually to a deserving senior at the
					Norfolk County Agricultural High School who is enrolled in a program
					of continuing education in horticulture, floriculture or environmental
					science and who has a record of good citizenship and scholarship.
					Scholarships are also available to members for GCFM and Master
					Gardener courses.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Sunshine
				</h3>
				<p>
					The Sunshine Committee sends letters or cards of congratulations, get
					well and condolence in the club's name to members.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Ways & Means
				</h3>
				<p>
					Ways & Means are the fundraising activities of the Norwood Evening
					Garden Club. The money collected through these activities supports our
					civic beautification, administrative and program activities. These
					projects are major undertakings and their success is dependent upon
					the participation of all club members.
				</p>
				<h3 className='heading heading-secondary heading-underline text-secondary'>
					Website
				</h3>
				<p>
					The webmaster is responsible for maintenance of the Norwood Evening
					Garden Club website.
				</p>
			</div>
		</div>
	);
};

export default Committees;
