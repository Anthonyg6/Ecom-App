import React, { Component } from "react";
import { reduxForm } from "redux-form";

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <div>sign innn</div>
      </div>
    );
  }
}

SignIn = reduxForm({
  form: "SignIn"
})(SignIn);
