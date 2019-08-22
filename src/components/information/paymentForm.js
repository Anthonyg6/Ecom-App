import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const info = [
      {
        id: 0,
        title: "At least 6 characters"
      },
      {
        id: 1,
        title: "At least one number"
      },
      {
        id: 2,
        title: "At least one symbol"
      }
    ];

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="sign-up-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-up-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="sign-up-form-confirm"
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
          component={FormInput}
        />

        <div className="sign-up-form-line" />
        <Field
          className="sign-up-form-login"
          onClick={() => history.push("/account")}
          type="submit"
          title="Create Account"
          name="login"
          component={FormButton}
        />
        <Field
          className="sign-up-form-back"
          onClick={() => history.push("/signin")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
