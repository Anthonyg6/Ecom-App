import React, { Component } from "react";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <i className={icon} />
    </div>
  );
}

function CartContent({ className }) {
  return (
    <div className={`${className} cart-content`}>
      <div>carton content</div>
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart-toggle" icon="fas fa-times" />
        <CartContent className="shop-cart-content" />
      </div>
    );
  }
}

export default ShopCart;
