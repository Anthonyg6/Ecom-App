import React, { Component } from "react";

import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className="navbar-link"
              key={index}
              onClick={() => console.log("Trynna tab over")}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  const { navbarLinks } = state.headerNavbar;
  return {
    navbarLinks
  };
}
Navbar = connect(mapStatetoProps)(Navbar);

export default Navbar;
