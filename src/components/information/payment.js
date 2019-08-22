import React, { Component } from "react";

import PageTitle from "../pageTitle";
import PaymentForm from "./paymentForm";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Payment extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Payment Information" />
        <PaymentForm onSubmit={this.onSubmit} className="payment-form" />
      </div>
    );
  }
}

Payment = connect(
  null,
  actions
)(Payment);

export default Payment;
