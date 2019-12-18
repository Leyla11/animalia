import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Layout from "../Layout";
import axios from "axios";

export default class Shelter extends Component {
  state = {
    centers: undefined,
    center: {}
  };

  getCenters = async () => {
    const response = await axios.get("http://localhost:3001");
    this.setState({
      centers: response.data.places
    });
  };

  getFilteredCenters = async () => {
    const response = await axios.get(
      `http://localhost:3001/${this.state.center}`
    );
    this.setState({
      centers: response.data.centersInCategory
    });
  };

  getAddCenter = async () => {
    const response = await axios.get("http://localhost:3001");
    this.setState({
      centers: response.data.center
    });
  };

  updateValue = e => {
    this.setState({ center: e.target.value });
  };

  componentDidMount() {
    this.getFilteredCenters();
    this.getCenters();
  }

  render() {
    const { centers } = this.state;

    return (
      <Layout history={this.props.history}>
        <div>
          <div className="columns is-centered">
            <div className="column is-6">
              <br />
              <h1 className="has-text-centered is-size-4">PET SHELTER</h1>
            </div>
          </div>
          <div className="control centers-button">
            <button
              type="submit"
              className="button is-primary"
              onClick={this.getFilteredCenters}
            >
              See All
            </button>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className="columns is-centered">
          <div className="column is-7">
            <div className="box">
              <h3 className="has-text-centered">Do you know any shelter?</h3>
              <div className="add-center-button">
                <NavLink exact to="/create-new">
                  <button className="button is-primary">Add new</button>
                </NavLink>
              </div>
            </div>
            <table className="box table">
              <tbody>
                {centers ? (
                  centers.map((center, i) => (
                    <tr key={i}>
                      <td>{center.name}</td>
                      {console.log(center)}
                      <td></td>
                      <td>
                        <Link to={`/center/${center._id}`}>Ver</Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <h3>Loading...</h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        {/* </div> */}
      </Layout>
    );
  }
}
