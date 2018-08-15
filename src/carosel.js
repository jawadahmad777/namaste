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
      autoplay: true,
      pauseOnFocus: true
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="slider">
            <img src="./images/kit1.jpg" />
          </div>
          <div className="slider">
            <img src="./images/kit3.jpg" />
          </div>
          <div className="slider">
            <img src="./images/kit4.jpg" />
          </div>
          <div className="slider">
            <img src="./images/kit6.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
