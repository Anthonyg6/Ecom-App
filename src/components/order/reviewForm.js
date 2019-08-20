import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormButton } from "../formFields";

import history from "../../history";
import ReviewProducts from "./reviewProducts";

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form-legend">
          <div className="review-form-legend-name">Name</div>
          <div className="review-form-legend-quantity">Quantity</div>
          <div className="review-form-legend-price">Price</div>
        </div>
        <ReviewProducts className="review-form-products" />
        <div className="review-form-line" />
        <Field
          className="review-form-proceed"
          onClick={() => history.push("/signin")}
          type="submit"
          title="Proceed To Checkout"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="review-form-back"
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <div className="review-form-details review-details">
          <div className="review-details-subtotal review-detail">
            <div className="review-detail-title">SubTotal</div>
            <div className="review-detail-price">$7.96</div>
          </div>
          <div className="review-details-tax review-detail">
            <div className="review-detail-title">Tax</div>
            <div className="review-detail-price">$0.16</div>
          </div>
          <div className="review-details-shipping review-detail">
            <div className="review-detail-title">Shipping</div>
            <div className="review-detail-price">$0.00</div>
          </div>
          <div className="review-details-total review-detail review-detail-green">
            <div className="review-detail-title review-detail-green-title">
              Total
            </div>
            <div className="review-detail-price review-detail-green-price">
              $8.12
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
