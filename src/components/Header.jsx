import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import React from 'react';

const Header = () => {
  return (
    <Navbar as={'div'} bg='primary' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>
          <h1 style={{ fontFamily: 'Sassy Frass' }}>DKMS websites</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className=' ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#gallery'>Gallery</Nav.Link>
            <Nav.Link href='#pricing'>Prices</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
