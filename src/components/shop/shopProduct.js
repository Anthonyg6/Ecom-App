import React, { Component } from "react";
import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

import * as actions from "../../actions";
import { connect } from "react-redux";

class ShopProducts extends Component {
  handleAddToCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      document.getElementById("shop-cart").classList.remove("cart-hidden");
      const { id, title, description, price, belongsTo } = this.props;
      this.props.addCartProduct({ id, title, description, price, belongsTo });
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };
  render() {
    const { id, title, description, price } = this.props;
    return (
      <div className="shop-product">
        <div className="shop-product-front">
          <img
            className="shop-product-front-img"
            src="https://via.placeholder.com/200x200"
          />
          <div className="shop-product-front-title">{title}</div>
        </div>
        <div className="shop-product-back">
          <div className="shop-product-back-title">{title}</div>
          <div className="shop-product-back-description">{description}</div>
          <GreenPriceTag className="shop-product-back-price" title={price} />
          <Quantity className="shop-product-back-quantity" quantity={1} />
          <a
            onClick={this.handleAddToCart}
            className="shop-product-back-add-to-cart"
          >
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

ShopProducts = connect(
  null,
  actions
)(ShopProducts);

export default ShopProducts;
