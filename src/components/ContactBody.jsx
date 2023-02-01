import React, { useState } from 'react';
import { Col, Button, Form, Card, Container } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactBody = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Container className='mt-5 text' id='contact'>
      <Card
        className='col-sm-12 col-md-8 col-lg-6 mx-auto '
        data-aos='fade-down-right'
        data-aos-anchor-placement='top-center'
      >
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Col className='mx-auto'>
            <Form action='https://formspree.io/f/xjvdgpwe' method='POST'>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Enter your name'
                  value={name}
                  name='name'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email address'
                  required
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='message'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as='textarea'
                  type='text'
                  placeholder='Enter your message'
                  required
                  name='message'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactBody;
