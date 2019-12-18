import React, { Component } from "react";
import { MyContext } from "../../context";
import Layout from "../Layout";
// import MY_SERVICE from '../../services/index'

class Profile extends Component {
  state = {
    user: {
      email: "",
      name: "",
      lastName: "",
      level: ""
    }
  };

  componentDidMount() {
    if (!this.context.state.loggedUser)
      return this.props.history.push("/login");
    const userData = this.context.state.loggedUser;
    this.setState(userData);
  }

  render() {
    const user = this.state;

    return (
      <Layout history={this.props.history}>
        <div className="profile-wrapper">
          <div className="columns is-centered">
            <div className="column is-4 box">
              <div>
                <div className="profile-images"></div>
                <div className="profile-p">
                  <p>Name: {user.name} </p>
                  <p>Lastname: {user.lastName} </p>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;
