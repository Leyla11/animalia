import React, { Component } from "react";
import { Link } from "react-router-dom";
import MY_SERVICE from "../service/index";

export default class Layout extends Component {
  logOut = () => {
    MY_SERVICE.logOut()
      .then(response => {
        console.log(response);
        this.setState({ loggedUser: null });
        delete localStorage.user;
        return this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  state = {
    user: JSON.parse(localStorage.getItem("user"))
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <nav
          className="navbar"
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              {" "}
              <img
                className="logo"
                src="/images/animalia.png"
                alt="huella"
              />{" "}
            </Link>
            <a
              href="/#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {user ? (
                    <div>
                      <div className="navbar-start">
                        <Link className="navbar-item" to="/home">
                          Home
                        </Link>
                        {user.role === "USUARIO" ? (
                          <Link className="navbar-item" to="/profile">
                            Profile
                          </Link>
                        ) : (
                          ""
                        )}
                        <button
                          onClick={this.logOut}
                          className="button is-primary"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Link className="button is-primary" to="/signup">
                        <strong>Create Account</strong>
                      </Link>
                      <Link className="button is-light" to="/login">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="footer">
          <div className="content has-text-centered">
            <p className="has-text-black">
              <strong className="has-text-black">Animalia</strong> by{" "}
              {/* <a href="https://github.com/Leyla11">Diana Cruz</a>. */}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
