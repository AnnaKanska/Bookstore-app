import React, { Component } from "react";
import logo from "../img/temporary-logo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li>View all</li>
            <li>Edit</li>
            <li>Add new</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
