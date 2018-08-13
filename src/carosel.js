import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default class DemoCarousel extends Component {
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
      <Slider {...settings}>
        <div>
          <img src="./images/logo.jpg" />
        </div>
        <div>
          <p>Legend 2</p>
        </div>
        <div>
          <p>Legend 3</p>
        </div>
      </Slider>
    );
  }
}
