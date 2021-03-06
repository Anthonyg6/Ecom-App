import {
  SET_NAVBAR_LINKS,
  SET_SHOP_CATEGORIES,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID,
  FILTER_PRODUCTS_WITH_QUERY
} from "./types";

export function filterProductsWithCategoryId(id) {
  return {
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: id
  };
}

export function filterProductsWithQuery(fields) {
  return {
    type: FILTER_PRODUCTS_WITH_QUERY,
    payload: fields
  };
}

export function fetchShopCategories() {
  return {
    type: SET_SHOP_CATEGORIES,
    payload: [
      {
        id: 0,
        title: "All"
      },
      {
        id: 1,
        title: "Javascript"
      },
      {
        id: 2,
        title: "UI/UX"
      },
      {
        id: 3,
        title: "Linux"
      },
      {
        id: 4,
        title: "Python"
      },
      {
        id: 5,
        title: "UML"
      },
      {
        id: 6,
        title: "Ruby"
      }
    ]
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        id: 0,
        title: "Javascript in the Browser",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?",
        price: 1.99,
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 1,
        title: "Graph Database",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid",
        price: 2.99,
        belongsTo: [0, 5],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 2,
        title: "Full Stack Development",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 5.99,
        belongsTo: [0, 1, 4, 6],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 3,
        title: "Javascript Development",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 2.99,
        belongsTo: [0, 1],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 4,
        title: "User Interface Design",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 1.99,
        belongsTo: [0, 5],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 5,
        title: "Advanced Object OOP",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 1.95,
        belongsTo: [0, 4],
        imageUrl: "http://via.placeholder.com/80x80"
      },
      {
        id: 6,
        title: "Another Product",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 5.99,
        belongsTo: [0, 1, 2, 3, 4, 5, 6],
        imageUrl: "http://via.placeholder.com/80x80"
      }
    ]
  };
}
