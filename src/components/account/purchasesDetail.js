import React, { Component } from "react";
import { connect } from "react-redux";

function PurchaseDetailLabel({ className, title, value }) {
  return (
    <div className={`${className} purchase-detail-label`}>
      <div className="purchase-detail-label-title">{title}</div>
      <div className="purchase-detail-label-value">{value}</div>
    </div>
  );
}

class PurchaseDetail extends Component {
  render() {
    const {
      className,
      orderNumber,
      orderDate,
      user,
      total,
      creditCard
    } = this.props;
    const { name, shippingAddress } = user;
    const { street, cityStateZip } = shippingAddress;
    return (
      <div className={`${className} purchase-detail`}>
        <PurchaseDetailLabel
          className="purchase-detail-order-number"
          title="Order Number"
          value={orderNumber}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-date"
          title="Order Date"
          value={orderDate}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-shipping-address"
          title="Shipping Address"
          value={`${name}\n${shippingAddress}`}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-total"
          title="Total"
          value={total}
        />
        <PurchaseDetailLabel
          className="purchase-detail-order-credit-card"
          title="Credit Card"
          value={creditCard}
        />
        <a className="purchase-detail-tracking">Tracking</a>
        <a className="purchase-detail-receipt">Print Receipt</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { purchaseDetail } = state.user;
  return {
    ...purchaseDetail
  };
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);
export default PurchaseDetail;
