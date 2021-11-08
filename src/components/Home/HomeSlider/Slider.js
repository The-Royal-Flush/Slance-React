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
      src="https://wallpaperaccess.com/full/427924.jpg"
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
      src="https://wallpaperaccess.com/full/427924.jpg"
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
      src="https://wallpaperaccess.com/full/427924.jpg"
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


