import { Container, Row } from 'react-bootstrap';
import ContactBody from './components/ContactBody';
import GalleryCorousel from './components/GalleryCorousel';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import PricingBody from './components/PricingBody';

const priceDetails = [
  {
    title: 'Start',
    details: ['SPA (Single Page App)', 'Simple website with contact form'],
    price: 'Price form €200',
  },
  {
    title: 'Medium',
    details: ['SPA (Single Page App)', 'Admin panel for adding images, etc...'],
    price: ' Price form €400',
  },
  {
    title: 'Advanced',
    details: [
      'Fully managed websites',
      'Admin panel for all required features',
    ],
    price: ' Prices depend on agreed content',
  },
];

function App() {
  return (
    <div className='App '>
      <Header />
      <Container>
        <HomeBody />
        <GalleryCorousel />
        <Row id='pricing' className='d-flex justify-content-evenly '>
          {priceDetails.map((detail, index) => (
            <PricingBody
              key={index + 1}
              title={detail.title}
              details={detail.details}
              price={detail.price}
            />
          ))}
        </Row>

        <ContactBody />
      </Container>
    </div>
  );
}

export default App;
