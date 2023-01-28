import { Image, Carousel } from 'react-bootstrap';

const GalleryCorousel = () => {
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
  );
};

export default GalleryCorousel;
