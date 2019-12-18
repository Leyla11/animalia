import React, { Component } from "react";
import Layout from "./../Layout";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  };
  render() {
    const { user } = this.state;
    return (
      <Layout history={this.props.history}>
        <div>
          <div className="columns">
            <div className="column is-4">
              <div className="home-container container">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/948/147/675/dog-animals-siberian-husky-water-wallpaper-preview.jpg"
                  width="400px"
                  height="1000px"
                  alt="pet-love"
                />
              </div>
            </div>
            <div className="column is-8">
              <br />
              <div className="top-home">
                <h1 className="has-text-centered is-size-4">
                  Welcome to Animalia!
                </h1>
                <div className="home-button">
                  {user.role === "ADMIN" ? (
                    <>
                      <NavLink exact to="/centers">
                        <button className="button is-medium is-primary">
                          {" "}
                          Shelters{" "}
                        </button>
                      </NavLink>

                      <NavLink exact to="/test">
                        <button className="button is-medium is-primary">
                          Register Contribution
                        </button>
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink exact to="/centers">
                        <button className="button is-medium is-primary">
                          {" "}
                          Shelters{" "}
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>
              </div>

              {/* Empieza boxes */}
              <div className="question-wrapper">
                <div className="columns is-centered">
                  <div className="column box is-8">
                    <h3 className="has-text-centered">About Us</h3>
                    <p>We are dedicated to promoting animal respect</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="question-wrapper">
                <div className="columns is-centered">
                  <div className="column box is-8">
                    <h3 className="has-text-centered">Animalia</h3>
                    <div className="img-animalia">
                      <img
                        src="/images/nosepet.jpeg"
                        width="300px"
                        height="200px"
                        alt="nose"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="question-wrapper">
                <div className="columns is-centered">
                  <div className="column box is-8">
                    <h3 className="has-text-centered">How does it work</h3>
                    <p>
                      It shows you animal shelters, as well as adoption or
                      rehabilitation centers
                    </p>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
