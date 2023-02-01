import { Col, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PricingBody = ({ title, details, price }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Col
      sm={12}
      md={8}
      lg={4}
      data-aos='flip-up'
      data-aos-anchor-placement='top-center'
    >
      <Card className=' rounded my-2 mt-5'>
        <Card.Body>
          <Button
            variant='primary'
            style={{
              position: 'fixed',
              top: -15,
              left: '50%',
              translate: '-50%',
            }}
          >
            <h5>{title}</h5>
          </Button>

          <Card.Text style={{ marginTop: '80px' }}>
            <ListGroup>
              {details.map((detail, index) => (
                <ListGroup.Item key={index + 1} className='text-primary'>
                  <small>{detail}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item variant='primary'>
              <Card.Title className='text-end mt-3 '>{price}</Card.Title>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

PricingBody.defaultProps = {
  title: 'Sample title',
  details: [
    'Sample Detail 1',
    'Sample Detail 1',
    'Sample Detail 1',
    'Sample Detail 1',
  ],
  price: '100',
};

export default PricingBody;
