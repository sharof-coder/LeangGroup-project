import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliderSertificate from '../SliderSertificateComp/SliderSertificate';

const SliderComp = () => {
    return (
        <div>
            <Container>
                <Row className='text-center mt-5 mb-5'>
                    <Col><h2>Качество продукции подтверждают <span className='text-warning'>сертификаты</span></h2></Col>
                </Row>
                <Row>
                    <Col><SliderSertificate /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default SliderComp