import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bgImage from '../../assets/bg1 1.svg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <Slider {...settings}>
      <div>
      <Card className=" text-dark">
      <Card.Img src={bgImage} alt="Card image" />
      <Card.ImgOverlay className='over'>
        <Card.Text>LEANGROUP - тубы и этикетки</Card.Text>
        <Card.Title>Ламинатные тубы</Card.Title>
        <Card.Text>
          Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой  <br />химии и DIY (Do-it-Yourself).
        </Card.Text>
          <Button className='btn btn-warning w-25'>Каталог</Button>    
      </Card.ImgOverlay>
    </Card>
      </div>
      <div>
      <Card className=" text-dark">
      <Card.Img src={bgImage} alt="Card image" />
      <Card.ImgOverlay className='over'>
        <Card.Text>LEANGROUP - тубы и этикетки</Card.Text>
        <Card.Title>Ламинатные тубы</Card.Title>
        <Card.Text>
          Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой  <br />химии и DIY (Do-it-Yourself).
        </Card.Text>
          <Button className='btn btn-warning w-25'>Каталог</Button>    
      </Card.ImgOverlay>
    </Card>
      </div>
      <div>
      <Card className=" text-dark">
      <Card.Img src={bgImage} alt="Card image" />
      <Card.ImgOverlay className='over'>
        <Card.Text>LEANGROUP - тубы и этикетки</Card.Text>
        <Card.Title>Ламинатные тубы</Card.Title>
        <Card.Text>
          Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой  <br />химии и DIY (Do-it-Yourself).
        </Card.Text>
          <Button className='btn btn-warning w-25'>Каталог</Button>    
      </Card.ImgOverlay>
    </Card>
      </div>
    </Slider>
  </div>
  )
}

export default Carousel