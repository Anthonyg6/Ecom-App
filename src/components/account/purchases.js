import React, { Component } from "react";

export default class Purchases extends Component {
  render() {
    const { className } = this.props;
    return <div className={`${className} purchases`}>Purchases go here</div>;
  }
}
