import React, { Component } from "react";

import SignInForm from "./signinForm";
import PageTitle from "../pageTitle";

class SignIn extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in-page-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}

export default SignIn;
