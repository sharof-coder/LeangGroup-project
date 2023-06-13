import React from 'react'
import Card from 'react-bootstrap/Card';
import VideoImg from '../../assets/video.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Company = () => {
    return (
        <div>
            <Container>
                <Row className='text-center mt-5 mb-3'>
                    <Col>
                        <h2>О компании <span className='text-warning'>LEANGROUP</span></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Img variant="bottom" src={VideoImg} />
                    </Col>
                    <Col>
                        <Card.Text>
                            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб. <br /><br />

                            Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.<br />

                            С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Company