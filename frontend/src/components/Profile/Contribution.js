import React, { Component } from "react";
import { MyContext } from "../../context/index";

import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Contribution extends Component {
  generate(n) {
    var add = 1,
      max = 12 - add;

    if (n > max) {
      return this.generate(max) + this.generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10;
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
  }

  render() {
    const Shelters = this.generate(4);
    return (
      <div className="columns is-centered">
        <div className="column is-5 box">
          <div className="button-contribution">
            <NavLink to="/shelter">
              <button className="button is-primary">Shelters</button>
            </NavLink>
            <NavLink to="/profile">
              <button className="button is-primary">Profile</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Contribution.contextType = MyContext;
