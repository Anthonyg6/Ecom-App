import React, { Component } from "react";

import AccountInformationForm from "./accountInformationForm";

import PageTitle from "../pageTitle";
import { connect } from "react-redux";
import * as actions from "../../actions";

class AccountInformation extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div>
        <PageTitle
          className="account-information-title"
          title="Account Information"
        />
        <AccountInformationForm
          onSubmit={this.onSubmit}
          className="account-information-form"
        />
      </div>
    );
  }
}

AccountInformation = connect(
  null,
  actions
)(AccountInformation);

export default AccountInformation;
