import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './product.scss'
import Button from '../Button/Button';
import CardComponent from '../cardCom/CardComponent';

const Product = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center product-title'>
            <h2>Наша <span className='text-warning'>продукция</span></h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-center  d-flex justify-content-center  '>
            <Button>Ламинатные тубы</Button>
            <Button>Экструзионные тубы</Button>
            <Button>Другая упаковка</Button>
          </Col>
          <Col>
            <CardComponent />
          </Col>
          <Col className='text-center'>
            <Button>Перейти в каталог</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product