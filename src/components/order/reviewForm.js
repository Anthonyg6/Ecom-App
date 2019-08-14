import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormButton } from "../formFields";

import history from "../../history";

class ReviewForm extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
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
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
