import React, { useState }from 'react';
import './style.scss';
// import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { images } from './images';
import Gallery from './Gallery';
import PhotosNav from './PhotosNav';

const Photos = () => {
	const [img, setImg] = useState(images);
	const [selectedGallery, setSelectedGallery] = useState(0);

	const selectedGall = img.filter((gallery) => gallery.id == selectedGallery);
	const renderedGallery = selectedGall.map((item) => {
		return <Gallery key={item.id} {...item}/> 
	})

	return (
		<div className='photos'>
			<h2 className='heading heading-primary'>
				Our Photo Gallery
				<div className="underline"></div>
			</h2>
			<PhotosNav onSelect={id => setSelectedGallery(id)} images={images}/>
			{/* <div className="photos-nav">
				<ul className="photos-nav-list">
					<li className="photos-nav-item">
						2018 Annual Holiday Party
						<span className="photos-nav-icon"><FaPlusCircle /></span>
					</li>
					<li className="photos-nav-item">2017-Fabulous Fall Flower Show</li>
					<li className="photos-nav-item">2017 Art-in-Bloom</li>
					<li className="photos-nav-item">2016 Art-in-Bloom</li>
					<li className="photos-nav-item">2017 Floral Design Workshop</li>
					<li className="photos-nav-item">2016 Floral Design Workshop</li>
					<li className="photos-nav-item">Garden Therapy</li>
					<li className="photos-nav-item">Meetings</li>

				</ul>
			</div>	 */}
			<div className="photos-container">
				<section className="test">
					{renderedGallery}
				</section>
				{/* <section className="photos-section">
					<div className="photos-section-title">
						2018 Annual Holiday Party
					</div>
					<div className="photos-section-gallery">
						<img src={a01} alt="fff" className="photos-section-item" />
						<img src={a02} alt="fff" className="photos-section-item"/>
						<img src={a03} alt="fff" className="photos-section-item"/>
						<img src={a04} alt="fff" className="photos-section-item"/>
						<img src={a05} alt="fff" className="photos-section-item"/>
						<img src={a06} alt="fff" className="photos-section-item"/>
						<img src={a07} alt="fff" className="photos-section-item"/>
						<img src={a08} alt="fff" className="photos-section-item"/>
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						2017 Fall Flower Show
					</div>
					<div className="photos-section-gallery">
						<img src={b01} alt="fff" className="photos-section-item" />
						<img src={b02} alt="fff" className="photos-section-item"/>
						<img src={b03} alt="fff" className="photos-section-item"/>
						<img src={b04} alt="fff" className="photos-section-item"/>
						<img src={b05} alt="fff" className="photos-section-item"/>
						<img src={b06} alt="fff" className="photos-section-item"/>
						<img src={b07} alt="fff" className="photos-section-item"/>
						<img src={b08} alt="fff" className="photos-section-item"/>
						<img src={b09} alt="fff" className="photos-section-item" />
						<img src={b10} alt="fff" className="photos-section-item"/>
						<img src={b11} alt="fff" className="photos-section-item"/>
						<img src={b12} alt="fff" className="photos-section-item"/>
						<img src={b13} alt="fff" className="photos-section-item"/>
						<img src={b14} alt="fff" className="photos-section-item"/>
						<img src={b15} alt="fff" className="photos-section-item"/>
						<img src={b16} alt="fff" className="photos-section-item"/>
						<img src={b17} alt="fff" className="photos-section-item" />
						<img src={b18} alt="fff" className="photos-section-item"/>
						<img src={b19} alt="fff" className="photos-section-item"/>
						<img src={b20} alt="fff" className="photos-section-item"/>
						<img src={b21} alt="fff" className="photos-section-item"/>
						<img src={b22} alt="fff" className="photos-section-item"/>
						<img src={b23} alt="fff" className="photos-section-item"/>
						<img src={b24} alt="fff" className="photos-section-item"/>
						<img src={b25} alt="fff" className="photos-section-item" />
						<img src={b26} alt="fff" className="photos-section-item"/>
						<img src={b27} alt="fff" className="photos-section-item"/>
						<img src={b28} alt="fff" className="photos-section-item"/>
						<img src={b29} alt="fff" className="photos-section-item"/>
						<img src={b30} alt="fff" className="photos-section-item"/>
						<img src={b31} alt="fff" className="photos-section-item"/>
						<img src={b32} alt="fff" className="photos-section-item"/>
						<img src={b33} alt="fff" className="photos-section-item" />
						<img src={b34} alt="fff" className="photos-section-item"/>
						<img src={b35} alt="fff" className="photos-section-item"/>
						<img src={b36} alt="fff" className="photos-section-item"/>
						<img src={b37} alt="fff" className="photos-section-item"/>
						<img src={b38} alt="fff" className="photos-section-item"/>
						<img src={b39} alt="fff" className="photos-section-item"/>
						<img src={b40} alt="fff" className="photos-section-item"/>
						<img src={b41} alt="fff" className="photos-section-item" />
						<img src={b42} alt="fff" className="photos-section-item"/>
						<img src={b43} alt="fff" className="photos-section-item"/>
						<img src={b44} alt="fff" className="photos-section-item"/>
						<img src={b45} alt="fff" className="photos-section-item"/>
						
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						2017 Art In Bloom
					</div>
					<div className="photos-section-gallery">
						<img src={c01} alt="fff" className="photos-section-item" />
						<img src={c02} alt="fff" className="photos-section-item"/>
						<img src={c03} alt="fff" className="photos-section-item"/>
						<img src={c04} alt="fff" className="photos-section-item"/>
						<img src={c05} alt="fff" className="photos-section-item"/>
						<img src={c06} alt="fff" className="photos-section-item"/>
						<img src={c07} alt="fff" className="photos-section-item"/>
						<img src={c08} alt="fff" className="photos-section-item"/>
						<img src={c09} alt="fff" className="photos-section-item" />
						<img src={c10} alt="fff" className="photos-section-item"/>
						<img src={c11} alt="fff" className="photos-section-item"/>
						<img src={c12} alt="fff" className="photos-section-item"/>
						<img src={c13} alt="fff" className="photos-section-item"/>
						<img src={c14} alt="fff" className="photos-section-item"/>
						<img src={c15} alt="fff" className="photos-section-item"/>
						<img src={c16} alt="fff" className="photos-section-item"/>
						<img src={c17} alt="fff" className="photos-section-item" />
						<img src={c18} alt="fff" className="photos-section-item"/>
						<img src={c19} alt="fff" className="photos-section-item"/>
						<img src={c20} alt="fff" className="photos-section-item"/>
						<img src={c21} alt="fff" className="photos-section-item"/>
						<img src={c22} alt="fff" className="photos-section-item"/>
						<img src={c23} alt="fff" className="photos-section-item"/>
						<img src={c24} alt="fff" className="photos-section-item"/>
						<img src={c25} alt="fff" className="photos-section-item" />
						<img src={c26} alt="fff" className="photos-section-item"/>
						<img src={c27} alt="fff" className="photos-section-item"/>
						<img src={c28} alt="fff" className="photos-section-item"/>
						<img src={c29} alt="fff" className="photos-section-item"/>
						<img src={c30} alt="fff" className="photos-section-item"/>
						<img src={c31} alt="fff" className="photos-section-item"/>
						<img src={c32} alt="fff" className="photos-section-item"/>
						<img src={c33} alt="fff" className="photos-section-item" />
						<img src={c34} alt="fff" className="photos-section-item"/>
						<img src={c35} alt="fff" className="photos-section-item"/>
						<img src={c36} alt="fff" className="photos-section-item"/>
						<img src={c37} alt="fff" className="photos-section-item"/>
						<img src={c38} alt="fff" className="photos-section-item"/>
						<img src={c39} alt="fff" className="photos-section-item"/>
						<img src={c40} alt="fff" className="photos-section-item"/>
						<img src={c41} alt="fff" className="photos-section-item" />
						<img src={c42} alt="fff" className="photos-section-item"/>
						<img src={c43} alt="fff" className="photos-section-item"/>
						<img src={c44} alt="fff" className="photos-section-item"/>
						<img src={c45} alt="fff" className="photos-section-item"/>
						<img src={c46} alt="fff" className="photos-section-item"/>	
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						2016 Art In Bloom
					</div>
					<div className="photos-section-gallery">
						<img src={d01} alt="fff" className="photos-section-item" />
						<img src={d02} alt="fff" className="photos-section-item"/>
						<img src={d03} alt="fff" className="photos-section-item"/>
						<img src={d04} alt="fff" className="photos-section-item"/>
						<img src={d05} alt="fff" className="photos-section-item"/>
						<img src={d06} alt="fff" className="photos-section-item"/>
						<img src={d07} alt="fff" className="photos-section-item"/>
						<img src={d08} alt="fff" className="photos-section-item"/>
						<img src={d09} alt="fff" className="photos-section-item" />
						<img src={d10} alt="fff" className="photos-section-item"/>
						<img src={d11} alt="fff" className="photos-section-item"/>
						<img src={d12} alt="fff" className="photos-section-item"/>
						<img src={d13} alt="fff" className="photos-section-item"/>
						<img src={d14} alt="fff" className="photos-section-item"/>
						<img src={d15} alt="fff" className="photos-section-item"/>
						<img src={d16} alt="fff" className="photos-section-item"/>
						<img src={d17} alt="fff" className="photos-section-item" />
						<img src={d18} alt="fff" className="photos-section-item"/>
						<img src={d19} alt="fff" className="photos-section-item"/>
						<img src={d20} alt="fff" className="photos-section-item"/>
						<img src={d21} alt="fff" className="photos-section-item"/>
						<img src={d22} alt="fff" className="photos-section-item"/>
						<img src={d23} alt="fff" className="photos-section-item"/>
						<img src={d24} alt="fff" className="photos-section-item"/>
						<img src={d25} alt="fff" className="photos-section-item" />
						<img src={d26} alt="fff" className="photos-section-item"/>
						<img src={d27} alt="fff" className="photos-section-item"/>	
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						2017 Floral Design Workshop
					</div>
					<div className="photos-section-gallery">
						<img src={e01} alt="fff" className="photos-section-item" />
						<img src={e02} alt="fff" className="photos-section-item"/>
						<img src={e03} alt="fff" className="photos-section-item"/>
						<img src={e04} alt="fff" className="photos-section-item"/>
						<img src={e05} alt="fff" className="photos-section-item"/>
						<img src={e06} alt="fff" className="photos-section-item"/>
						<img src={e07} alt="fff" className="photos-section-item"/>
						<img src={e08} alt="fff" className="photos-section-item"/>
						<img src={e09} alt="fff" className="photos-section-item" />
						<img src={e10} alt="fff" className="photos-section-item"/>
						<img src={e11} alt="fff" className="photos-section-item"/>
						<img src={e12} alt="fff" className="photos-section-item"/>
						<img src={e13} alt="fff" className="photos-section-item"/>
						<img src={e14} alt="fff" className="photos-section-item"/>
						<img src={e15} alt="fff" className="photos-section-item"/>
						<img src={e16} alt="fff" className="photos-section-item"/>
						<img src={e17} alt="fff" className="photos-section-item" />
						<img src={e18} alt="fff" className="photos-section-item"/>
						<img src={e19} alt="fff" className="photos-section-item"/>
						<img src={e20} alt="fff" className="photos-section-item"/>
						<img src={e21} alt="fff" className="photos-section-item"/>
						<img src={e22} alt="fff" className="photos-section-item"/>
						<img src={e23} alt="fff" className="photos-section-item"/>
						<img src={e24} alt="fff" className="photos-section-item"/>
						<img src={e25} alt="fff" className="photos-section-item" />
						<img src={e26} alt="fff" className="photos-section-item"/>
						<img src={e27} alt="fff" className="photos-section-item"/>
						<img src={e28} alt="fff" className="photos-section-item"/>
						<img src={e29} alt="fff" className="photos-section-item"/>
						<img src={e30} alt="fff" className="photos-section-item"/>
						<img src={e31} alt="fff" className="photos-section-item"/>
						<img src={e32} alt="fff" className="photos-section-item"/>
						<img src={e33} alt="fff" className="photos-section-item" />
						<img src={e34} alt="fff" className="photos-section-item"/>
						<img src={e35} alt="fff" className="photos-section-item"/>
						<img src={e36} alt="fff" className="photos-section-item"/>
						<img src={e37} alt="fff" className="photos-section-item"/>
						<img src={e38} alt="fff" className="photos-section-item"/>
						<img src={e39} alt="fff" className="photos-section-item"/>
						<img src={e40} alt="fff" className="photos-section-item"/>
						<img src={e41} alt="fff" className="photos-section-item" />
						<img src={e42} alt="fff" className="photos-section-item"/>
						<img src={e43} alt="fff" className="photos-section-item"/>
						<img src={e44} alt="fff" className="photos-section-item"/>
						<img src={e45} alt="fff" className="photos-section-item"/>
						<img src={e46} alt="fff" className="photos-section-item"/>	
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						2016 Floral Design Workshop
					</div>
					<div className="photos-section-gallery">
						<img src={f01} alt="fff" className="photos-section-item" />
						<img src={f02} alt="fff" className="photos-section-item"/>
						<img src={f03} alt="fff" className="photos-section-item"/>
						<img src={f04} alt="fff" className="photos-section-item"/>
						<img src={f05} alt="fff" className="photos-section-item"/>
						<img src={f06} alt="fff" className="photos-section-item"/>
						<img src={f07} alt="fff" className="photos-section-item"/>
						<img src={f08} alt="fff" className="photos-section-item"/>
						<img src={f09} alt="fff" className="photos-section-item" />
						<img src={f10} alt="fff" className="photos-section-item"/>
						<img src={f11} alt="fff" className="photos-section-item"/>
						<img src={f12} alt="fff" className="photos-section-item"/>
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						Garden Therapy
					</div>
					<div className="photos-section-gallery">
						<img src={g01} alt="fff" className="photos-section-item" />
					</div>
				</section>
				<section className="photos-section">
					<div className="photos-section-title">
						Meetings
					</div>
					<div className="photos-section-gallery">
						<img src={h04} alt="fff" className="photos-section-item" />
						<img src={h05} alt="fff" className="photos-section-item" />
						<img src={h06} alt="fff" className="photos-section-item" />
					</div>
					<div className="photos-section-gallery">
						<img src={h01} alt="fff" className="photos-section-item" />
						<img src={h03} alt="fff" className="photos-section-item" />
						<img src={h02} alt="fff" className="photos-section-item" />
					
					</div>
				</section> */}
			</div>
		</div>
	);
};

export default Photos;
