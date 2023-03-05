import React from 'react';
// import { Alert, Container } from 'react-bootstrap';
import Footer from '../blocks/footer/Footer';
import Header from '../blocks/header/Header';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
	return (
		<div className='container-fluid'>
			<Header />
			{/* <Container>
				<Alert variant='primary'>
					<h1> {children} </h1>
				</Alert>
			</Container> */}
			<div className='container-fluid'>{children}</div>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
