import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinte: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="./images/logo.jpg" />
          </div>
          <div>
            <img src="./images/kit1.jpg" />
          </div>
          <div>
            <img src="./images/logo.jpg" />
          </div>
          <div>
            <img src="./images/kit1.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
