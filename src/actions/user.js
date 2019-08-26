import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
  AUTHENTICATE_USER
} from "./types";

export function signIn({ email, password }) {
  console.log({ email, password });
  return {
    type: AUTHENTICATE_USER,
    payload: {
      user: {
        id: 0,
        name: "Anthony Gallegos",
        address: "854 N Lafayette Dr",
        cartProducts: []
      }
    }
  };
}

export function setPurchaseDetail(id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: id
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        id: 0,
        product: {
          id: 0,
          title: "Javascript in the Browser",
          description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl: "http://via.placeholder.com/80x80"
        },
        quantity: 1
      },
      {
        id: 1,
        product: {
          id: 1,
          title: "Graph Database",
          description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid",
          price: 2.99,
          belongsTo: [0, 5],
          imageUrl: "http://via.placeholder.com/80x80"
        },
        quantity: 1
      },
      {
        id: 2,
        product: {
          id: 1,
          title: "Graph Database",
          description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid",
          price: 2.99,
          belongsTo: [0, 5],
          imageUrl: "http://via.placeholder.com/80x80"
        },
        quantity: 1
      }
    ]
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        id: 0,
        total: "8.00",
        orderNumber: "245566AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jayce Gallegos",
          shippingAddress: "854 N Lafayette Dr SLC UT 84104"
        }
      },
      {
        id: 1,
        total: "18.52",
        orderNumber: "365444AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Anthony Gallegos",
          shippingAddress: "424 W 200 N Bountiful UT 84010"
        }
      },
      {
        id: 2,
        total: "9.60",
        orderNumber: "2466688AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Mike Jones",
          shippingAddress: "1265 N RedWood Rd SLC UT 84116"
        }
      },
      {
        id: 3,
        total: "26.55",
        orderNumber: "209566AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Tony Gallegos",
          shippingAddress: "844 West Oakley St, Glendale AZ 84777"
        }
      },
      {
        id: 4,
        total: "14.56",
        orderNumber: "277445AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Joe Smith",
          shippingAddress: "16447 S West lake Dr NY NY 10044"
        }
      },
      {
        id: 5,
        total: "20.00",
        orderNumber: "255569D",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Joseph Smith Jr",
          shippingAddress: "8668 West Driver St San Diego CA 90016"
        }
      },
      {
        id: 6,
        total: "45.66",
        orderNumber: "2568966AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Lebron James",
          shippingAddress: "2323 Beverly Hills Rd Beverly Hills CA 95664"
        }
      },
      {
        id: 7,
        total: "566.00",
        orderNumber: "258894AD",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Anthony Davis",
          shippingAddress: "457 Oakley St SLC UT 84104"
        }
      }
    ]
  };
}
