import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
        <Field
          className="shipping-form-name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="shipping-form-address"
          type="address"
          title="Street Address"
          placeholder="Street Address"
          name="address"
          component={FormInput}
        />
        <Field
          className="shipping-form-city"
          type="city"
          title="City"
          placeholder="City"
          name="city"
          component={FormInput}
        />
        <Field
          className="shipping-form-state"
          type="state"
          title="State"
          placeholder="State"
          name="state"
          component={FormInput}
        />
        <Field
          className="shipping-form-zipcode"
          type="zipcode"
          title="Zip Code"
          placeholder="Zip Code"
          name="zipcode"
          component={FormInput}
        />

        <div className="shipping-form-line" />

        <Field
          className="shipping-form-back"
          onClick={() => history.push("/signin")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <Field
          className="shipping-form-use-this-address"
          onClick={() => history.push("/information/payment")}
          type="submit"
          title="Use This Address"
          name="use-this-address"
          component={FormButton}
        />
      </form>
    );
  }
}

ShippingForm = reduxForm({
  form: "ShippingForm"
})(ShippingForm);

export default ShippingForm;
