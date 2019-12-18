import React, { Component } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <Layout history={this.props.history}>
        <div className="landing-container">
          <div className="columns is-centered">
            <div className="column is-6">
              <p> Welcome to Animalia! </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
