import { Row, Col, Image } from 'react-bootstrap';

const HomeBody = () => {
  return (
    <Row style={{ height: '100%' }}>
      <Col
        sm={12}
        md={6}
        className='d-flex flex-column justify-content-center align-items-center'
      >
        <Row>
          <h1 className='text-center'>
            DKMS <br /> Websites
          </h1>
        </Row>
        <Row className='mt-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          molestias sapiente dolor sint odit sequi doloremque! Itaque eius
          libero similique eligendi sed, doloribus magnam, consectetur veniam,
          perferendis illum quasi iusto.
        </Row>
      </Col>
      <Col
        sm={12}
        md={6}
        className='d-flex justify-content-center align-items-center'
      >
        <Image src='./images/WebDesign.png' alt='Web design' fluid />
      </Col>
    </Row>
  );
};

export default HomeBody;
