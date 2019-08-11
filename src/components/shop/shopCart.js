import React, { Component } from "react";
import CartProduct from "./cartProduct";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <i className={icon} />
    </div>
  );
}

function CartContent({ className, products }) {
  let count = products.length;
  let productsJSX = products.map(product => <CartProduct key={product} />);
  return (
    <div className={`${className} cart-content`}>
      <div className="title">Cart ({count})</div>
      <div className="products">{productsJSX}</div>
      <CartFooter className="footer" products={products} />
    </div>
  );
}

function CartFooter({ className, products }) {
  const price = 7.96;
  return (
    <div className={`${className} cart-footer`}>
      <a className="cart-footer-checkout">Checkout</a>
      <div className="cart-footer-subtotal">Subtotal</div>
      <div className="cart-footer-price">${price}</div>
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart-toggle" icon="fas fa-times" />
        <CartContent
          className="shop-cart-content"
          products={[423, 452, 555, 423, 452, 555, 423, 452, 555, 423, 452]}
        />
      </div>
    );
  }
}

export default ShopCart;