import React from 'react';

import Footer from '../blocks/footer/Footer';
import Header from '../blocks/header/Header';
import { Alert } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const SideBarLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='container'>
				<Alert variant='primary'>
					<div className='row'>
						<div className='sm-4'>
							<h1>SideBar</h1>
						</div>
						<div className='sm-8'>
							<h1>{children}</h1>
						</div>
					</div>
				</Alert>
			</div>
			<Footer />
		</div>
	);
};

export default SideBarLayout;
