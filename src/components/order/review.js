import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PageTitle from "../pageTitle";

import ReviewForm from "./reviewForm";

class Review extends Component {
  componentDidCatch() {
    this.props.setHeaderLinks([]);
    this.props.setNavBarLinks([]);
  }

  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="review">
        <PageTitle className="review-page-title" title="Order Review" />
        <ReviewForm onSubmit={this.onSubmit} className="review-form" />
      </div>
    );
  }
}

Review = connect(
  null,
  actions
)(Review);

export default Review;
