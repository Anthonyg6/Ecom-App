import { SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS } from "./types";

export function fetchShopCategories() {
  return {
    type: SET_NAVBAR_LINKS,
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
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        price: 1.99,
        belongsTo: [0, 1]
      },
      {
        id: 1,
        title: "Graph Database",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid",
        price: 2.99,
        belongsTo: [0, 5]
      },
      {
        id: 2,
        title: "Full Stack Development",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 5.99,
        belongsTo: [0, 1, 4, 6]
      },
      {
        id: 3,
        title: "Javascript Development",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 2.99,
        belongsTo: [0, 1]
      },
      {
        id: 4,
        title: "User Interface Design",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 1.99,
        belongsTo: [0, 5]
      },
      {
        id: 5,
        title: "Advanced Object OOP",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 1.95,
        belongsTo: [0, 4]
      },
      {
        id: 6,
        title: "Another Product",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        price: 5.99,
        belongsTo: [0, 1, 2, 3, 4, 5, 6]
      }
    ]
  };
}
