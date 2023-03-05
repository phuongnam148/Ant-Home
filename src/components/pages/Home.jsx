import React from 'react';
import banner from '../../images/slider_1.jpg';
import './scss/home.scss';
const Home = () => {
	return (
		<div className='container-fluid'>
			<img className='img-fluid' src={banner} alt='' />
			<div>Home Component</div>
			<div className='.container-lg'>
				<div className='cate'></div>
			</div>
		</div>
	);
};

export default Home;
