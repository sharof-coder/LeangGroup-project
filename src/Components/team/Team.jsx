import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './team.scss'
import PersonImg1 from '../../assets/person-img_1.svg'
import PersonImg2 from '../../assets/person-img_2.svg'
import PersonImg3 from '../../assets/person-img_3.svg'
import PersonImg4 from '../../assets/person-img_4.svg'
import PersonImg5 from '../../assets/person-img_5.svg'
import Button from '../Button/Button';

const Team = () => {
    return (
        <div>
            <Container>
            <Row>
            <Col md className='text-center mt-5'>
                <h2>Наша <span className='text-warning'>команда</span></h2>
            </Col>
        </Row>
                <Row>
                    <Col>
                        <Card className='border-none text-center'>
                            <Card.Img className='person-img' variant="top" src={PersonImg1} />
                            <Card.Body>
                                <Card.Title>Войнич Дарья</Card.Title>
                                <Card.Text>
                                    Заместитель директора по продажам
                                </Card.Text>
                                <Card.Text className='small'>
                                    +375 (17) 270-53-77 (317)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-none text-center'>
                            <Card.Img className='person-img' variant="top" src={PersonImg2} />
                            <Card.Body>
                                <Card.Title>Мисько Екатерина    </Card.Title>
                                <Card.Text>
                                    Начальник отдела сопровождения
                                </Card.Text>
                                <Card.Text className='small'>
                                    +375 (17) 270-53-77 (115)
                                    +375 29 112-73-48
                                </Card.Text>
                                <Card.Text className='small'>
                                    k.melnichenko@leangroup.by
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-none text-center'>
                            <Card.Img className='person-img' variant="top" src={PersonImg3} />
                            <Card.Body>
                                <Card.Title>Дмитроченко Дмитрий</Card.Title>
                                <Card.Text>
                                    Начальник отдела допечатной подготовки
                                </Card.Text>
                                <Card.Text>
                                    +375 (17) 270-53-77 (333)
                                    +375 29 360-32-26
                                </Card.Text>
                                <Card.Text>
                                    dmitrochenko@leangroup.by
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-none text-center'>
                            <Card.Img className='person-img' variant="top" src={PersonImg4} />
                            <Card.Body>
                                <Card.Title>Антух Евгений</Card.Title>
                                <Card.Text className='small'>
                                    Начальник отдела снабжения
                                </Card.Text>
                                <Card.Text className='small'>
                                    +375 (17) 270-53-77 (148)
                                    +375 44 764-16-28
                                </Card.Text>
                                <Card.Text className='small'>
                                    j.antuh@leangroup.by
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-none text-center'>
                            <Card.Img className='person-img' variant="top" src={PersonImg5} />
                            <Card.Body>
                                <Card.Title>Мисник Елена</Card.Title>
                                <Card.Text className='small'>
                                Специалист по работе с клиентами
                                </Card.Text>
                                <Card.Text className='small'>
                                +375 (17) 270-53-77 (322)
                                +375 29 329-34-03
                                </Card.Text>
                                <Card.Text className='small'>
                                e.misnik@leangroup.by
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center mt-5'><Button>Наша команда</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team