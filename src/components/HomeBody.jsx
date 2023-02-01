import { Row, Col, Image, Container } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomeBody = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container id='home'>
      <Row className='py-5'>
        <Col sm={12} md={6} lg={6} className='mx-auto'>
          <Row data-aos='fade-up' data-aos-delay='2000'>
            <h1 className='text-center'>
              DKMS <br /> Websites
            </h1>
          </Row>
          <Row data-aos-delay='3000' data-aos='fade-up' className='mt-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, molestias sapiente dolor sint odit sequi doloremque!
            Itaque eius libero similique eligendi sed, doloribus magnam,
            consectetur veniam, perferendis illum quasi iusto.
          </Row>
        </Col>

        <Col sm={12} md={6} lg={6} className='text-center my-auto'>
          <Image
            data-aos='slide-right'
            src='./images/WebDesign.png'
            alt='Web design'
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBody;
