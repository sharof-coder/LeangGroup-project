import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './news.scss'
import bgImg1 from '../../assets/news-Comp_img1.svg'
import bgImg2 from '../../assets/news-Comp_img2.svg'
import bgImg3 from '../../assets/news-Comp_img3.svg'

const News = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md className='text-center mt-5'>
            <h2>Новости</h2>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Card className='card-box'>
              <Card.Img className='card_img' variant="top" src={bgImg1} />
              <Card.Body>
                <Card.Title className='small'>28.01.2022</Card.Title>
                <Card.Text>
                "ЛеанГрупп" серебряный призер EcoVadis!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className='card-box'>
              <Card.Img className='card_img' variant="top" src={bgImg2} />
              <Card.Body>
                <Card.Title className='small'>28.01.2022</Card.Title>
                <Card.Text>
                "ЛеанГрупп" серебряный призер <br /> EcoVadis!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className='card-box'>
              <Card.Img className='card_img' variant="top" src={bgImg3} />
              <Card.Body>
                <Card.Title className='small'>28.01.2022</Card.Title>
                <Card.Text>
                Туба, как вид упаковки
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default News