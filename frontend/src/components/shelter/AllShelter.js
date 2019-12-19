import React, { Component } from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import Layout from "../Layout";
import { MyContext } from "../../context/index";
import { NavLink } from "react-router-dom";
import refugios from "../../components/refugios.json";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWx6eiIsImEiOiJjandrNmVzNzUwNWZjNGFqdGcwNmJ2ZWhpIn0.ybY6wnAtJwj-Tq0c46sW6A";

export default class Shelter extends Component {
  state = {
    shelters: refugios,
    user: JSON.parse(localStorage.getItem("user"))
  };

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:3000/api/center/${this.props.match.params.id}`)
  //     .then(res => {
  //       this.setState({ center: res.data.place });
  //       const map = new mapboxgl.Map({
  //         container: this.mapContainer,
  //         style: "mapbox://styles/mapbox/streets-v9"
  //       });

  // componentWillMount() {

  //   this.setState();
  //   // const map = new mapboxgl.Map({
  //   //   container: this.mapContainer
  //   //   //style: "mapbox://styles/mapbox/streets-v9
  //   // });
  //   return Shelter;
  // }
  // componentDidMount() {
  //   const shelters = refugios.find();
  //   this.state.shelters = shelters;
  //   this.setState({ shelters });
  // }

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       const user_location = [
  //         position.coords.longitude,
  //         position.coords.latitude
  //       ];
  //       map.setZoom(12).setShelter(user_location);
  //       new mapboxgl.Marker({ color: "red" })
  //         .setLngLat(user_location)
  //         .setPopup(new mapboxgl.Popup().setHTML("<h3> You are here </h3>"))
  //         .addTo(map);
  //     });
  //   }

  //   if (this.state.shelter.longitud && this.state.shelter.latitud) {
  //     const shelter_location = [
  //       this.state.shelter.longitud,
  //       this.state.shelter.latitud
  //     ];
  //     new mapboxgl.Marker({ color: "#33BBFF" })
  //       .setLngLat(shelter_location)
  //       .setPopup(new mapboxgl.Popup().setHTML("<h3>Posting</h3>"))
  //       .addTo(map);
  //   }

  //   map.addControl(
  //     new mapboxgl.GeolocateControl({
  //       positionOptions: {
  //         enableHighAccuracy: true
  //       },
  //       trackUserLocation: true,
  //       showUserLocation: true
  //     })
  //   );

  //   map.addControl(
  //     new MapboxDirections({
  //       accessToken: mapboxgl.accessToken,
  //       unit: "metric",
  //       language: "es",
  //       placeholderOrigin: "Select your place",
  //       placeholderDestination: "Select your destination"
  //     }),
  //     "top-left"
  //   );

  //   map.addControl(new mapboxgl.NavigationControl());
  // };

  render() {
    const { shelters } = this.state;
    return (
      <div>
        {shelters.map(shelter => (
          <div>{shelter.place}</div>
        ))}
      </div>
      <Layout history={this.props.history}>
        <div className="section">
          <div className="container">
            {/* <p className="has-text-centered category-center">
              Categoria: {this.state.shelter.place}
            </p> */}

            <div className="columns">
              {/* <div
                className="column is -7 map"
                style={{ width: "50vw", height: "90vh" }}
                ref={e => (this.mapContainer = e)}
              /> */}
              <div className="column is-5 data">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title card-text">
                      {this.state.shelter.shelter}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <p>Adress: {this.state.shelter.address}</p>
                      <p>
                        Email:{" "}
                        {this.state.shelter.email
                          ? this.state.shelter.email
                          : "Not Available"}
                      </p>
                      <p>
                        Number:{" "}
                        {this.state.shelter.contactNumber
                          ? this.state.shelter.contactNumber
                          : "Not Available"}
                      </p>
                      <p>
                        Website:{" "}
                        {this.state.shelter.website
                          ? this.state.shelter.website
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
              </div>
            </div>
          </div>
          //{" "}
        </div>
      </Layout>
    );
  }
}
// Shelter.contextType = MyContext;
