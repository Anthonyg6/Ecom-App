import React, { Component } from "react";

import SignInForm from "./signinForm";

class SignIn extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="sign-in">
        <SignInForm onSubmit={this.onSubmit} className="sign-in-form" />
      </div>
    );
  }
}

export default SignIn;
