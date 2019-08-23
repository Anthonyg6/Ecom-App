import React, { Component } from "react";

import { UnderlinedTitle, InfoTitle } from "./infoHelp";

export default class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle className="order-summary-title" />
        <InfoTitle
          className="order-summary-subtotal"
          title="4 Stickers"
          value="7.96"
        />
        <InfoTitle
          className="order-summary-tax-shipping"
          title="Taxes & Shipping"
          value="0.16"
        />
        <InfoTitle className="order-summary-total" title="Total" value="8.02" />
      </div>
    );
  }
}
