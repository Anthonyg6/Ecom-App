import React, { Component } from "react";

import PageTitle from "../pageTitle";
import ShippingForm from "./shippingForm";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shipping extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="shipping-form">
        <PageTitle
          className="shipping-form-page-title"
          title="Shipping Information"
        />
        <ShippingForm onSubmit={this.onSubmit} className="shipping-form-form" />
      </div>
    );
  }
}

Shipping = connect(
  null,
  actions
)(Shipping);

export default Shipping;
