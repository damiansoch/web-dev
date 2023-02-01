import { Container, Nav, Navbar } from 'react-bootstrap';

import React from 'react';

const Header = () => {
  return (
    <Navbar sticky='top' variant='dark ' bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#gallery'>Gallery</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
