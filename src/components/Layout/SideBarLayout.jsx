import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Navbar from '../pages/Navbar';
import { Alert } from 'react-bootstrap';

const SideBarLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <Alert variant="primary">
          <Row>
            <Col sm={4}>
              <h1>SideBar</h1>
            </Col>
            <Col sm={8}>
              <h1>{children}</h1>
            </Col>
          </Row>
        </Alert>
      </Container>
      <Footer />
    </div>
  );
};

export default SideBarLayout;
