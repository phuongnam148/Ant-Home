import React from 'react';

import Footer from '../blocks/footer/Footer';
import Header from '../blocks/header/Header';

// eslint-disable-next-line react/prop-types
const SideBarLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='container'>
				<div className='primary'>
					<div className='row'>
						<div className='col-4'>
							<h1>SideBar</h1>
						</div>
						<div className='col-8'>
							<h1>{children}</h1>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SideBarLayout;
