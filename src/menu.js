import React from "react";

import axios from "./axios";
import { BrowserRouter, Route } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="menu">
          <div className="b">
            <img src="./images/checken.jpg" />
          </div>
          <div className="b">
            <h1>Checken Kurry</h1>
            <p>
              The best part about this recipe is that the only ingredient you
              may need is curry powder. <br /> Besides that, you'll need common
              items like olive oil, onion, garlic, ginger, butter, and tomato
              puree.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 9 Euro </span>
            </h2>
          </div>
        </div>
        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/chickpea.jpg" />
          </div>
          <div className="b">
            <h1>Chickpea Curry</h1>
            <p>
              The ingredient list looks more intimidating than the recipe is in
              reality.<br /> Chickpeas, onions, tomatoes, along with garlic and
              ginger pastes. From there it's just those common Indian spices
              that make this food unique.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 7,50 Euro </span>
            </h2>
          </div>
        </div>
        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/palak.jpg" />
          </div>
          <div className="b">
            <h1>Palak Paneer</h1>
            <p>
              The most popular paneer recipe at Indian restaurants is, by far,
              palak paneer.<br /> It is nothing more than spinach and cottage
              cheese (the paneer) and it's a mildly flavored dish that is super
              healthy, too.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 7,50 Euro </span>
            </h2>
          </div>
        </div>
        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/tandoori.jpg" />
          </div>
          <div className="b">
            <h1>Tandoori Chicken</h1>
            <p>
              It's hard to find anyone who doesn't fall in love with tandoori
              chicken.<br /> Serve this one over basmati rice tossed with
              turmeric and add a few slices of fresh onion for an extra kick.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 10,50 Euro </span>
            </h2>
          </div>
        </div>
        <br />

        <div className="menu">
          <div className="b">
            <img src="./images/roghan.jpg" />
          </div>
          <div className="b">
            <h1>Rogan Josh</h1>
            <p>
              The literal translation for the name of this dish from Kashmir is
              "red lamb."<br /> The color comes from Kashmiri dry red chilies.
              While the name may sound fiery, the heat of the dish is toned down
              by the cream that is added at the end.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 9 Euro </span>
            </h2>
          </div>
        </div>

        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/kofta.jpg" />
          </div>
          <div className="b">
            <h1>Malai Kufta</h1>
            <p>
              Malai kofta (veggie-balls in a thick sauce) is the vegetarian
              alternative to meatballs.<br /> It goes very well with naan or
              jeera rice. The koftas are made with a mix of potatoes, carrots,
              beans, peas, and sweet corn.
            </p>
            <h2>
              Price per 500g:&emsp; <span> 7 Euro </span>
            </h2>
          </div>
        </div>
        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/butter.jpg" />
          </div>
          <div className="b">
            <h1> Butter Checken</h1>
            <p>
              Butter chicken is one of the top orders at any Indian restaurant
              it is delicious. <br />This sultry poultry dish tastes great with
              kaali daal (black lentils), naan, and a green salad. ingredients
              olive oil, onion, garlic, ginger, butter, and tomato puree.
            </p>
            <h2>
              Price per Portion:&emsp; <span> 11 Euro </span>
            </h2>
          </div>
        </div>
        <br />
        <div className="menu">
          <div className="b">
            <img src="./images/nann.jpg" />
          </div>
          <div className="b">
            <h1>Naan</h1>
            <p>
              Naan is everyone's favorite Indian flatbread. Naan is a staple in
              the Indian kitchen and can go with everything you make,<br />{" "}
              including many popular dishes like tandoori chicken or all kinds
              of kebabs. Though naan is traditionally cooked in a tandoor or
              earthen oven, they work just as well in your own oven.
            </p>
            <h2>
              Price per Naan:&emsp; <span> 1,50 Euro </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
