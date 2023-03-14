import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../components/blocks/footer/Footer';
import Header from '../components/blocks/header/Header';

const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default DefaultLayout;
