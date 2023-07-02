import { Component } from "react";
import React from "react";
import "./Navbarstyle.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    return (
      
        <nav className="navbar">
          <div  className="HoopsHub"><h3> HoopsHub</h3>
          
          </div>
          <a href="/index">     
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="./">
                  Home
                </a>
              </li>
              <li>
                <a href="/Club">Club</a>
              </li>
              <li>
                <a href="/Program">Programs</a>
              </li>
              <li>
                <a href="/GymLocation">Gym Locations</a>
              </li>
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>

    );
  }
}

export default Navbar;