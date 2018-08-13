import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./app";
import Contact from "./contact";
import Logo from "./logo";
import Menu from "./menu";
import AboutUs from "./aboutus";
import Order from "./order";
export default function Navigation() {
  return (
    <div>
      <Logo />
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/AboutUs">About Us</Link>
      </li>
      <li>
        <Link to="/Menu">Menu</Link>
      </li>
      <li>
        <Link to="/Order">Order</Link>
      </li>
    </div>
  );
}
