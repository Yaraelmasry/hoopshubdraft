import React, { Component } from "react";
import "./LocationStyles.css";

class LocationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="loc-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <p>{this.props.text2}</p>
          <p>{this.props.text3}</p>
          <p>{this.props.text4}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}
export default LocationData;