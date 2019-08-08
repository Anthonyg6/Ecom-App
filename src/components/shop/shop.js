import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shopSearchBar";
import ShopProducts from "./shopProduct";

class Shop extends Component {
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

  render() {
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
        {/* shop cart button*/}
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
