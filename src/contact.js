import React from "react";
import Footer from "./footer";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="contact">
          <h2 className="h2">Contact and opening hours</h2>
          <table>
            <tr>
              <th>Monday to Saturday</th>
              <th>Sunday</th>
              <th>Address</th>
              <th>Telephone</th>
              <th>Fax</th>
            </tr>
            <tr>
              <td>11 AM to 10 PM</td>
              <td>12 AM to 10 PM</td>
              <td>MarkStr. 2a 09661 Hainichen</td>
              <td>0372-994260</td>
              <td>0361-994260</td>
            </tr>
          </table>

          <iframe
            style={{
              width: "90%",
              height: "450px",
              frameBorder: "0"
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.3127251825667!2d13.120901315603787!3d50.973409979550915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7686fcf0bdbf9%3A0x3b993b030bc34e09!2sMarktstra%C3%9Fe+2A%2C+09661+Hainichen!5e0!3m2!1sen!2sde!4v1534258413025 "
          />
        </div>
        <Footer />
      </div>
    );
  }
}
