import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "./axios";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <h3>Follow us</h3>
        <p>
          <Link to="https://www.facebook.com/">Facebook</Link>
        </p>
        <p>
          <Link to="">Instagram</Link>
        </p>
        <p>
          <Link to="">rahimmamondA@gmail.com</Link>
        </p>
      </div>
    );
  }
}
