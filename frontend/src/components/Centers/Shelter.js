import React, { Component } from "react";
import MapboxDirections from "./node_modules/@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import Layout from "../Layout";
import { MyContext } from "../../context/index";
import { NavLink } from "react-router-dom";
import refugios from "../";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF5YW4xMSIsImEiOiJjazQzMTZqdngwMDJjM25vMmFnODd6azBkIn0.drLXBFDWxOjLOzy3MzxgtA";

class Center extends Component {
  state = {
    center: {},
    shelter: {},
    user: JSON.parse(localStorage.getItem("user"))
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/centers/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ shelter: res.data.place });
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: "mapbox://styles/mapbox/streets-v9"
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const user_location = [
              position.coords.longitude,
              position.coords.latitude
            ];
            map.setZoom(12).setShelter(user_location);
            new mapboxgl.Marker({ color: "red" })
              .setLngLat(user_location)
              .setPopup(new mapboxgl.Popup().setHTML("<h3>You are here</h3>"))
              .addTo(map);
          });
        }

        if (this.state.center.longitud && this.state.shelter.latitud) {
          const center_location = [
            this.state.center.longitud,
            this.state.center.latitud
          ];
          new mapboxgl.Marker({ color: "green" })
            .setLngLat(center_location)
            .setPopup(new mapboxgl.Popup().setHTML("<h3>Way</h3>"))
            .addTo(map);
        }

        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
          })
        );

        map.addControl(
          new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: "metric",
            language: "es",
            placeholderOrigin: "Origin",
            placeholderDestination: "Destination"
          }),
          "top-left"
        );

        map.addControl(new mapboxgl.NavigationControl());
      });
  }
  render() {
    const { user } = this.state;
    return (
      <Layout history={this.props.history}>
        <div className="section">
          <div className="container">
            <p className="has-text-centered center">
              Categoria: {this.state.center.Shelter}
            </p>

            <div className="columns">
              <div
                className="column is -7 map"
                style={{ width: "50vw", height: "90vh" }}
                ref={e => (this.mapContainer = e)}
              />
              <div className="column is-5 data">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title card-text">
                      {this.state.shelter.place}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <p>Adress: {this.state.shelter.address}</p>
                      <p>
                        Email:{" "}
                        {this.state.shelter.email
                          ? this.state.shelter.email
                          : "Not Aviable"}
                      </p>
                      <p>
                        Number:{" "}
                        {this.state.shelter.contactNumber
                          ? this.state.shelter.contactNumber
                          : "Not Aviable"}
                      </p>
                      <p>
                        Website:{" "}
                        {this.state.shelter.website
                          ? this.state.shelter.website
                          : "Not Aviable"}
                      </p>
                    </div>
                    <div className="home-button">
                      {user.role === "USUARIO" ? (
                        <>
                          <NavLink exact to="/contribution">
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
Shelter.contextType = MyContext;
export default Centers;
