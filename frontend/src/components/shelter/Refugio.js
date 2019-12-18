import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import axios from "axios";

export default class Refugio extends Component {
  getFilteredRefugio = async () => {
    const response = await axios.get(
      "https://young-beyond-07801.herokuapp.com/api/centers/:categoryCenter"
    );
    this.setState({
      centers: response.data.places
    });
  };

  componentDidMount() {
    this.getFilteredRefugio();
  }

  render() {
    return (
      <div>
        <p>Refugio</p>
      </div>
    );
  }
}
