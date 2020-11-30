import { RECEIVE_PRODUCT } from "./actions";
const productsInitialState = {
  products: [],
  lastProduct: null,
};

export default function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      console.log(action.payload, action.payload.product);
      const products = state.products.concat([action.payload.product]);
      console.log(products);
      const lastProduct = action.payload.product;
      return { ...state, products, lastProduct };
    default:
      return state;
  }
}
