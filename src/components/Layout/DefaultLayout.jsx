import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Footer from '../blocks/footer/Footer';
import Header from '../blocks/header/Header';
import Navbar from '../pages/Navbar';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<Navbar />
			<Container>
				<Alert variant='primary'>
					<h1> {children} </h1>
				</Alert>
			</Container>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
