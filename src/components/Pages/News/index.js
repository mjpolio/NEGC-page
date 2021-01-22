import React from 'react';
import './style.scss';
import imgs from './data';

const News = () => {

	const renderedList = imgs.map((item) => {
		return (
			<div className="news-card">
					<div className="news-image">
						<img src={item.image} className="news-image" alt="garden" />	
					</div>
					<div className="news-info">
						<a 
							href={item.pdf} 
							className="news-link" 
							target="_blank"
							rel="noreferrer noopener"
						>
							{item.info}
						</a>
						<div className="news-date">{item.date}</div>
					</div>
			</div>
		)
	});

	return (
		<div className='news'>
			<h2 className='heading heading-primary'>
				News
				<div className="underline"></div>
			</h2>	
			{renderedList}
		</div>
	);
};

export default News;
