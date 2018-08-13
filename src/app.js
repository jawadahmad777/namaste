import React from "react";
import axios from "./axios";
import AboutUs from "./aboutus";
import Contact from "./contact";
import Order from "./order";
import Menu from "./menu";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./navigation";
import DemoCarousel from "./carosel";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Order" component={Order} />
            <Route exact path="/AboutUs" component={AboutUs} />
          </div>
        </BrowserRouter>
        <DemoCarousel />
        <p>Some thing is better than nothig</p>
      </div>
    );
  }
}
