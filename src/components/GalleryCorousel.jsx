import { Image, Carousel, Row, Col } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const GalleryCorousel = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const imageDataArray = [
    {
      uri: './images/gallery1.png',
      title: 'lorem1title',
      caption: 'lorem1caption',
    },
    {
      uri: './images/gallery2.png',
      title: 'lorem2title',
      caption: 'lorem2caption',
    },
    {
      uri: './images/gallery3.png',
      title: 'lorem3title',
      caption: 'lorem3caption',
    },
    {
      uri: './images/gallery4.png',
      title: 'lorem4title',
      caption: 'lorem4caption',
    },
    {
      uri: './images/gallery5.png',
      title: 'lorem5title',
      caption: 'lorem5caption',
    },
  ];
  return (
    <Row
      id='gallery'
      data-aos='zoom-out-up'
      data-aos-anchor-placement='top-center'
    >
      <Col lg={6} md={8} sm={12} className='mx-auto mt-5'>
        <Carousel>
          {imageDataArray.map((imageData, index) => (
            <Carousel.Item key={index + 1}>
              <Image
                className='d-block w-100 mx-auto rounded-pill'
                src={imageData.uri}
                alt={`Web page example ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>{imageData.title}</h3>
                <p>{imageData.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default GalleryCorousel;
