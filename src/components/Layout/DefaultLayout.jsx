import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Navbar from '../pages/Navbar';

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
