import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

import history from "../../history";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        id: 0,
        title: "Not registered? Create account here!",
        onClick: () => history.push("./signup")
      },
      {
        id: 1,
        title: "Forgot account email",
        onClick: () => console.log("Forgot Account Email")
      },
      {
        id: 2,
        title: "Forgot password",
        onClick: () => console.log("Forgot password")
      }
    ];

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form-email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form-password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <div className="sign-in-form-line" />
        <Field
          className="sign-in-form-login"
          onClick={() => history.push("/account")}
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
        <Details
          className="sign-in-form-details"
          title="Quick Links"
          links={links}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
