import React from "react";

import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src="./images/logo.jpg" />
      </div>
    );
  }
}
