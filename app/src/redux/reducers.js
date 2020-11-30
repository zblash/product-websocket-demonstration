import { RECEIVE_PRODUCT } from "./actions";
const productsInitialState = {
  products: [],
  lastProduct: null,
};

export default function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      const products = state.products.push(action.payload.product);
      const lastProduct = action.payload.product;
      return { ...state, products, lastProduct };
    default:
      return state;
  }
}
