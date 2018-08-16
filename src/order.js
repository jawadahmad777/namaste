import React from "react";
import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";
class Order extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    //AXIOS makes able to make an AJAX work from clint to server///////////
    axios.post("/order", this.state).then(resp => {
      if (resp.data.success) {
        this.setState({
          isLoggedIn: true
        });
      }
    });
  }

  render() {
    return (
      <div className="order">
        <h3>Order your Meal</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            type="text"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            type="email"
          />
          <br />

          <input
            onChange={this.handleChange}
            name="address"
            type="text"
            placeholder="Address"
          />
          <br />
          <input
            onChange={this.handleChange}
            name="phone"
            type="text"
            placeholder="Phone"
          />
          <br />
          <select type="select" onChange={this.handleChange} name="orders">
            <option value="Select">Select Dish</option>
            <option value="Butter Chicken">Butter Chicken</option>
            <option value="Tandoori Chicken">Tandoori Chicken</option>
            <option value="Rogan Josh">Rogan Josh</option>
            <option value="Malai Kufta">Malai Kofta</option>
            <option value="Chickpea Curry">Checkpea Curry</option>
            <option value="Palak Paneer">Palak Paneer</option>
            <option value="Naan">Naan</option>
            <option value="Chicken Curry">Checken Curry</option>
          </select>
          <br />

          <button type="submit">Order</button>
        </form>
      </div>
    );
  }
}

export default Order;
