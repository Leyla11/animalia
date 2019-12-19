import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import Layout from "../Layout";
import { MyContext } from "../../context/index";
import { NavLink } from "react-router-dom";
import refugios from "../../components/refugios.json";

export default class Shelter extends Component {
  state = {
    shelters: refugios,
    user: JSON.parse(localStorage.getItem("user"))
  };

  render() {
    const { shelters } = this.state;
    const { user } = this.state;
    return (
      <Layout history={this.props.history}>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-5 data">
                <div></div>
                {shelters.map(shelter => (
                  <>
                    <div>{shelter.place}</div>

                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title card-text">
                          {shelter.place}
                        </p>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          <p>Adress: {shelter.address}</p>
                          <p>
                            Email:{" "}
                            {shelter.email ? shelter.email : "Not Available"}
                          </p>
                          <p>
                            Number:{" "}
                            {shelter.contactNumber
                              ? shelter.contactNumber
                              : "Not Available"}
                          </p>
                          <p>
                            Website:{" "}
                            {shelter.website
                              ? shelter.website
                              : "Not Available"}
                          </p>
                        </div>
                        <div className="home-button">
                          {user.role === "USUARIO" ? (
                            <>
                              <NavLink exact to="/allShelter">
                                <button className="button is-primary">
                                  Add Shelter 🐾
                                </button>
                              </NavLink>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
