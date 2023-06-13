import React from 'react'
import logo from '../../assets/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto ">
                        <NavDropdown title="Продукция" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ламинатные тубы</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Экструзионные тубы
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Другая упаковка</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Сертификаты">Сертификаты</Nav.Link>
                        <Nav.Link href="#Наша команда">Наша команда</Nav.Link>
                        <Nav.Link href="#О нас">О нас</Nav.Link>
                        <Nav.Link href="#Новости">Новости</Nav.Link>
                        <Nav.Link href="#Вакансии">Вакансии</Nav.Link>
                        <Nav.Link href="#Контакты">Контакты</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><span className='text-warning'>RU</span> | EN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header