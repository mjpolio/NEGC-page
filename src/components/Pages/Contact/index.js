import React from 'react';
import './style.scss';

const Contact = () => {
	return (
		<div className='contact'>
			<h2 className='heading heading-primary'>
				Contact Us
				<div className='underline'></div>
			</h2>

			<h3 className='heading heading-secondary secondary-text my-5'>
				Meetings are held at the Carriage House <br /> at <br /> the First
				Baptist Church, 71 Bond Street in Norwood
			</h3>
			<p className='primary-text'>
				Norwood Evening Garden Club <br /> P.O. Box 882 <br /> Norwood, MA 02062
			</p>
			<h3 className='heading heading-secondary heading-underline pt-5'>
				Email us at
			</h3>
			<a
				href='mailto:meheike59@gmail.com?subject=Gardening Club Membership'
				className='link'
			>
				Membership - Mary Ellen Heike (membership)
			</a>
			<br />
			<a
				href='mailto:donnamlane@verizon.net?subject=Gardening Club Information'
				className='link'
			>
				Information - Donna Lane (information)
			</a>
			<br />
			<a
				href='mailto:sheela.hk.venkatesh@gmail.com?subject=Gardening Club Webmaster'
				className='link'
			>
				Webmaster - Sheela Venkatesh (webmaster)
			</a>
		</div>
	);
};

export default Contact;
