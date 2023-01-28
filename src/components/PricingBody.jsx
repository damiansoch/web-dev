import { Col, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PricingBody = ({ title, details, price }) => {
  return (
    <Col lg={3} md={12} sm={12} xs={12} className='mb-3'>
      <Card className=' rounded'>
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
