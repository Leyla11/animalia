import React, { Component } from "react";
import MY_SERVICE from "../../service/index";

class Signup extends Component {
  state = {
    user: {
      name: "",
      lastname: "",
      email: "",
      password: ""
    }
  };

  handleInput = e => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
    MY_SERVICE.signup(this.state.user)
      .then(response => {
        let userMsg = response.data.msg;
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userMsg } = this.state.user;
    return (
      <div className="signup-wrapper">
        <br />
        <br />
        <br />
        <br />
        <div className="columns is-centered">
          <div>
            <p className="message is-success">{userMsg}</p>
            <form className="columns is-5" onSubmit={this.onSubmit}>
              <div className="column">
                <h1 className="title is-1 has-text-light has-text-centered">
                  Sign up
                </h1>
                <label className="label has-text-light is-size-4">Email:</label>
                <input
                  className="input"
                  onChange={this.handleInput}
                  type="email"
                  name="email"
                />

                <label className="label has-text-light is-size-4">Name:</label>
                <input
                  className="input"
                  onChange={this.handleInput}
                  type="text"
                  name="name"
                />

                <label className="label has-text-light is-size-4">
                  Lastname:
                </label>
                <input
                  className="input"
                  onChange={this.handleInput}
                  type="text"
                  name="lastname"
                />

                <label className="label has-text-light is-size-4">
                  Password:
                </label>
                <input
                  className="input"
                  onChange={this.handleInput}
                  type="password"
                  name="password"
                />

                <div className="signup-button">
                  <input
                    className="button is-primary is-fullwidth "
                    type="submit"
                    value="Signup"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
