import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImg1 from '../../assets/card-img_1.svg'
import CardImg2 from '../../assets/card-img_2.svg'
import CardImg3 from '../../assets/card-img_3.svg'
import CardImg4 from '../../assets/card-img_4.svg'
import CardImg5 from '../../assets/card-img_5.svg'
import './card.scss'

const CardComponent = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='card-com'>
                        <img className='product-img' src={CardImg1} alt='product-img'/>
                        <img className='product-img' src={CardImg2} alt='product-img'/>
                        <img className='product-img' src={CardImg3} alt='product-img'/>
                        <img className='product-img' src={CardImg4} alt='product-img'/>
                        <img className='product-img' src={CardImg5} alt='product-img'/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default CardComponent