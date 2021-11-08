import React from 'react';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Slider.css"

function Slider() {
    return (
        <div>
<Carousel className="slider_main" fade>
  <Carousel.Item>
    <img
      className="d-block w-100 slider_main_img"
      src="https://raw.githubusercontent.com/The-Royal-Flush/Slance/c091ee8bc248e1064988b9ba3639cc642b7473e5/img/Image2.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Everything has a story.</h3>
      <p>Explore one of the best curation of shoe collections.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider_main_img"
      src="https://raw.githubusercontent.com/The-Royal-Flush/Slance/main/img/Image4.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider_main_img"
      src="https://raw.githubusercontent.com/The-Royal-Flush/Slance/main/img/Image5.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider


