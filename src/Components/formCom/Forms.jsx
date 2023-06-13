import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import bgImage from '../../assets/form_banner.svg'
import ReactPersonIcon from '../../assets/person_icon.svg'
import ReactPhoneIcon from '../../assets/phone_icon.svg'
import './form.scss'

const Forms = () => {
    return (
        
        <>
            <Container>
                <Card className="text-dark mt-5">
                    <Card.Img src={bgImage} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className='fs-3'>Получить подробную <span className='text-warning'> информацию</span></Card.Title>
                        <Card.Text> Просто заполните форму, наш менеджер свяжется <br /> вами в ближайшее время</Card.Text>
                        <InputGroup size='small' className="mb-3 w-50">
                            <InputGroup.Text>
                                <Button variant="outline-secondary" id="button-addon1">
                                    <img src={ReactPersonIcon} alt='icon' />
                                </Button>
                            </InputGroup.Text>
                            <Form.Control
                            className='input me-4'
                                type='text'
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder='Ваше имя'
                            />
                            <InputGroup.Text>
                                <Button variant="outline-secondary" id="button-addon1">
                                    <img src={ReactPhoneIcon} alt='icon' />
                                </Button>
                            </InputGroup.Text>
                            <Form.Control
                            className='input'
                                type='number'
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder='+375 (29) 0000000'
                            />
                        </InputGroup>
                        <FloatingLabel className='w-50 mb-5' controlId="floatingTextarea2" label="Комментарий">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                        />
                      </FloatingLabel>
                      <Button variant='warning'>Получить информацию</Button>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </>
    )
}

export default Forms