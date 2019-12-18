import React, { Component } from "react";
import MapboxDirections from "./node_modules/@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import Layout from "../Layout";
import { MyContext } from "../../context/index";
import { NavLink } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF5YW4xMSIsImEiOiJjazQzMTZqdngwMDJjM25vMmFnODd6azBkIn0.drLXBFDWxOjLOzy3MzxgtA";

class Center extends Component {
  state = {
    center: {},
    user: JSON.parse(localStorage.getItem("user"))
  };

  componentDidMount() {
    axios
      .get(
        `https://young-beyond-07801.herokuapp.com/api/center/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ center: res.data.place });
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
            map.setZoom(12).setCenter(user_location);
            new mapboxgl.Marker({ color: "red" })
              .setLngLat(user_location)
              .setPopup(new mapboxgl.Popup().setHTML("<h3>You are here</h3>"))
              .addTo(map);
          });
        }

        if (this.state.center.longitud && this.state.center.latitud) {
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
            <p className="has-text-centered category-center">
              Categoria: {this.state.center.tipoResiduo}
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
                      {this.state.center.place}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <p>Direccion: {this.state.center.address}</p>
                      <p>
                        Email:{" "}
                        {this.state.center.email
                          ? this.state.center.email
                          : "Not Aviable"}
                      </p>
                      <p>
                        Numero:{" "}
                        {this.state.center.contactNumber
                          ? this.state.center.contactNumber
                          : "Not Aviable"}
                      </p>
                      <p>
                        Website:{" "}
                        {this.state.center.website
                          ? this.state.center.website
                          : "Not Aviable"}
                      </p>
                      <p>
                        Horario:{" "}
                        {this.state.center.horario
                          ? this.state.center.horario
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
Center.contextType = MyContext;
export default Center;
