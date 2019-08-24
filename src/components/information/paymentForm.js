import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import OrderSummary from "./orderSummary";

import history from "../../history";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form-name"
          type="name"
          title="Name on Credit Card"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form-card"
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="card"
          component={FormInput}
        />

        <Field
          className="payment-form-expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="Expiration"
          name="state"
          component={FormInput}
        />
        <Field
          className="payment-form-ccv"
          type="CCV"
          title="CCV"
          placeholder="CCV"
          name="CCV"
          component={FormInput}
        />
        <div className="payment-form-line" />
        <Field
          className="payment-form-pay-complete"
          onClick={() => history.push("/information/payment")}
          type="submit"
          title="Pay & Complete"
          name="pay-complete"
          component={FormButton}
        />
        <Field
          className="payment-form-back"
          onClick={() => history.push("/information/shipping")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className="payment-form-order-summary" />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
