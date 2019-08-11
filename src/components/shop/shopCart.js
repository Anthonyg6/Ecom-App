import React, { Component } from "react";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <i className={icon} />
    </div>
  );
}

function CartContent({ className, products }) {
  let count = products.length;
  return (
    <div className={`${className} cart-content`}>
      <div className="title">Cart ({count})</div>
      <div className="products" />
      <div className="footer" />
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart-toggle" icon="fas fa-times" />
        <CartContent className="shop-cart-content" products={[423, 452, 555]} />
      </div>
    );
  }
}

export default ShopCart;
