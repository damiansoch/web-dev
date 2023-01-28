import { Container } from 'react-bootstrap';
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
    <div className='App'>
      <Header />
      <Container>
        <div id='home' style={{ height: '90vh', paddingTop: '10vh' }}>
          <HomeBody />
        </div>
        <div
          id='gallery'
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100vh' }}
        >
          <GalleryCorousel />
        </div>
        <div
          id='pricing'
          style={{ minHeight: '100vh', marginTop: '20vh' }}
          className='d-flex flex-wrap justify-content-evenly align-items-center '
        >
          {priceDetails.map((detail, index) => (
            <PricingBody
              key={index + 1}
              title={detail.title}
              details={detail.details}
              price={detail.price}
            />
          ))}
        </div>
        <div id='contact' style={{ height: '50vh', marginTop: '20vh' }}>
          <>Contact</>
        </div>
      </Container>
    </div>
  );
}

export default App;
