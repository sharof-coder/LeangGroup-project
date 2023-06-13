import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Vkon from '../../assets/vk.svg'
import Linkedin from '../../assets/linkedin.svg'
import Facebook from '../../assets/fb.svg'
import logo from '../../assets/logo.svg'
import './footer.scss'
import FooterList from '../footer-list/FooterList';
import BackTop from '../back-top/BackTop';


const Footer = () => {
    return (
        <div className='mt-5 card'>
            <Container>
                <Card>
                    <Card.Header className='d-flex justify-content-between ps-5'>
                        <div>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className="d-flex align-items-stretch pe-2">
                            <img src={Vkon} alt='logo' />
                            <img className='m-3' src={Linkedin} alt='logo' />
                            <img src={Facebook} alt='logo' />
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <FooterList />
                        </Card.Text>
                    </Card.Body>

                    <div className="word ps-5">
                        <p>© 2022 Leangroup. All Rights Reserved.<br />
                            Разработка и продвижение сайтов SkyWeb.by</p>
                    </div>

                    <BackTop />
                </Card>

            </Container>
        </div>
    )
}

export default Footer