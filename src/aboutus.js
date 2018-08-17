import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "./axios";
import Carousel from "./carosel";
import Footer from "./footer";
export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="aboutusimage" />
        <p className="some">
          <Link to="/AboutUs">About Us</Link>
        </p>
        <div className="ourmenu" />
        <p className="some">
          <Link to="/Menu">Menu</Link>
        </p>
        <div className="ourslider">
          <Carousel />
        </div>
        <Footer />
      </div>
    );
  }
}
