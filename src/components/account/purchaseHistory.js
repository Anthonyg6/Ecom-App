import React, { Component } from "react";

import PageTitle from "../pageTitle";
import Purchases from "./purchases";
import PurchaseDetail from "./purchasesDetail";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history-page-title"
          title="Purchase History"
        />
        <Purchases className="purchase-history-purchases" />
        <PurchaseDetail className="purchase-history-purchase-detail" />
        <div className="purchase-history-bottom-border" />
      </div>
    );
  }
}

export default PurchaseHistory;
