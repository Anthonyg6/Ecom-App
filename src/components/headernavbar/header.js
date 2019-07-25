import React, { Component } from "react";

import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header-img" src="http://via.placeholder.com/50x50" />
        <div className="header-links">
          {this.props.headerLinks.map((link, index) => {
            return (
              <a
                className="header-link"
                key={index}
                onClick={() => console.log("Trynna tab over")}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  const { headerLinks } = state.headerNavbar;
  return {
    headerLinks
  };
}
Header = connect(mapStatetoProps)(Header);

export default Header;
