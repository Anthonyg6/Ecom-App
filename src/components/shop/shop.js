import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shopSearchBar";
import ShopProducts from "./shopProduct";
import ShopCart from "./shopCart";
import CartButton from "./cartButton";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      showCart: true
    };
  }
  componentDidMount() {
    const headerLinks = [
      {
        id: 0,
        title: "Login",
        path: "/signin"
      }
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, id =>
        this.props.filterProductsWithCategoryId(id)
      );
    }
    return true;
  }

  onSubmit = fields => {
    this.props.filterProductsWithQuery(fields);
  };

  handleAddToCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      document.getElementById("shop-cart").classList.remove("cart-hidden");
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };

  render() {
    // return <ShopCart className="shop-cart" />;
    return (
      <div className="shop">
        <ShopSearchBar
          onSubmit={this.onSubmit}
          className="shop-shop-search-bar"
        />
        <div className="shop-products">
          {this.props.filteredProducts.map(product => {
            return <ShopProducts {...product} key={product.id} />;
          })}
        </div>

        {this.state.showCart ? <ShopCart className="shop-shop-cart" /> : ""}

        <CartButton
          onClick={this.handleAddToCart}
          className="shop-cart-button"
          icon="fas fa-shopping-cart"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop;
  return {
    categories,
    filteredProducts
  };
}
Shop = connect(
  mapStateToProps,
  actions
)(Shop);

export default Shop;
