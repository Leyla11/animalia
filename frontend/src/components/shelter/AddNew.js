import React, { Component } from "react";
import CENTER_SERVICE from "../../service/center";
import Layout from "../Layout";
import Axios from "axios";

export default class CreateNew extends Component {
  state = {
    center: {
      place: "",
      email: "",
      website: "",
      address: "",
      contactNumber: ""
    }
  };

  handleInput = e => {
    const { center } = this.state;
    const key = e.target.name;
    center[key] = e.target.value;
    this.setState({ center });
  };

  addNew = async () => {
    const { data } = await CENTER_SERVICE.addNew(this.state.shelter);
    console.log(data);
  };

  addCenter = e => {
    e.preventDefault();
    const { center } = this.state;
    this.addNewShelter();
    this.props.history.push("/shelters");
  };

  updateValue = e => {
    console.log(e);
    const { center } = this.state;
    this.setState({ ...center, shelter: e.target.value });
  };

  render() {
    let { center } = this.state;
    console.log(this.state.center);

    return (
      <Layout history={this.props.history}>
        <div className="new-center-wrapper">
          <div className="columns is-centered">
            <div className="add-new-box">
              <form className="columns is-5 box" onSubmit={this.addNew}>
                <div className="column">
                  <h1 className="title is-3">Add shelter</h1>

                  <label className="label is-size-6">Name:*</label>
                  <input
                    className="input"
                    onChange={this.handleInput}
                    type="text"
                    name="place"
                    value={center.place}
                    required
                  />

                  <label className="label is-size-6">Email:</label>
                  <input
                    className="input"
                    onChange={this.handleInput}
                    type="email"
                    name="email"
                    value={center.email}
                  />

                  <label className="label is-size-6">Website:</label>
                  <input
                    className="input"
                    onChange={this.handleInput}
                    type="text"
                    name="website"
                    value={center.website}
                  />

                  <label className="label is-size-6">Adress:*</label>
                  <input
                    className="input"
                    onChange={this.handleInput}
                    type="text"
                    name="address"
                    value={center.address}
                    required
                  />

                  <label className="label is-size-6">Contact Number:</label>
                  <input
                    className="input"
                    onChange={this.handleInput}
                    type="number"
                    name="contactNumber"
                    value={center.contactNumber}
                  />
                  <div>
                    <input
                      className="button is-primary is-fullwidth"
                      type="submit"
                      value="Add Shelter"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
