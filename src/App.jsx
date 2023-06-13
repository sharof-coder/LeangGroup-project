
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Features from './Components/main/Features';
import Company from './Components/company/Company';
import SliderComp from './Components/slider-component/SliderComp';
import Product from './Components/product/Product';
import Forms from './Components/formCom/Forms';
import Team from './Components/team/Team';
import News from './Components/news/News';
import Button from './Components/Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Company />
      <SliderComp />
      <Product />
      <Forms />
      <Team />
      <News />
      <Container className='text-center mt-5'>
        <Row>
          <Col><Button>Все новости</Button></Col>
        </Row>
      </Container>
      <Footer />
    </div>

  )
}

export default App