import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "./axios";
import Carousel from "./carosel";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="home">
          <div className="aboutusimage">
            <p>
              <Link to="/AboutUs">About Us</Link>
            </p>
          </div>
          <div className="menuimage">
            <p>
              <Link to="/Menu">Menu</Link>
            </p>
          </div>
        </div>
        <Carousel />
      </div>
    );
  }
}
