import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import CENTER_SERVICE from "../shelter/Shelters";

export default class Test extends Component {
  state = {
    result: "",
    contribution: {
      quantity: "",
      unity: ""
    }
  };

  addContribution = async () => {
    const { data } = await CENTER_SERVICE.addContribution(
      this.state.contribution
    );
    console.log(data);
  };

  onSubmit = e => {
    e.preventDefault();
    this.addContribution();
    this.props.history.push("/contribution-list");
  };

  handleInput = e => {
    const { contribution } = this.state;
    const key = e.target.name;
    contribution[key] = e.target.value;
    this.setState({ contribution });
  };

  render() {
    let { contribution } = this.state;
    return (
      <div className="columns is-centered">
        <div className="column is-5 box">
          <p className="has-text-centered"></p>
          <p className="has-text-centered">{this.state.result}</p>
          {this.state.result ? (
            <>
              {/* <p>Record the contribution!</p> */}
              <form className="columns is-5 box" onSubmit={this.onSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-primary"
                      onChange={this.handleInput}
                      name="quantity"
                      value={contribution.quantity}
                      type="text"
                      placeholder="type"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-primary"
                      onChange={this.handleInput}
                      name="unity"
                      value={contribution.unity}
                      type="text"
                      placeholder="type"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="button is-primary is-fullwidth"
                    type="submit"
                    value="Add Contribution"
                  />
                </div>
              </form>
            </>
          ) : (
            ""
          )}

          <div className="button-contribution">
            <NavLink to="/shelter">
              <button className="button is-primary">Shelter</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
