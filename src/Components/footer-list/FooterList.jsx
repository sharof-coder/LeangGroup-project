import React from 'react'
import './footer-list.scss'

const FooterList = () => {
    return (
        <div className='parent-box_list'>
            <div className="list-items">
                <ul>
                    <li><h3><a href="#">Продукция</a></h3></li>
                    <li><a href="#">Ламинатные тубы</a></li>
                    <li><a href="#">Экструзионные тубы</a></li>
                    <li><a href="#">Другая упаковка</a></li>
                </ul>
                <ul>
                    <li><h3><a href="#">Компания</a></h3></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Наша команда</a></li>
                    <li><a href="#">Сертификаты</a></li>
                </ul>
                <ul>
                    <li><h3><a href="#">Разделы</a></h3></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Вакансии</a></li>
                </ul>
            </div>
            <div className="contact-content">
                <div className="contact-belarus">
                    <h5 className='title-text'>Беларусь</h5>
                    <p>+375 (17) 270 53 77</p>
                    <p>+375 (17) 270 53 78</p>
                </div>
                <div className="contact-euro">
                    <h5 className='title-text'>Европа</h5>
                    <p>+48 73 1111 044</p>
                </div>
                <div className="contact-moscow">
                    <h5 className='title-text'>Москва</h5>
                    <p>+7 (495) 280 73 44</p>
                    <p>+7 (495) 280 73 44</p>
                </div>
                <div className="contact-ekatern">
                    <h5 className='title-text'>Екатеринбург</h5>
                    <p>+7 (343) 346 82 06</p>
                </div>
            </div>
        </div>
    )
}

export default FooterList