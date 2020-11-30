export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export function receiveProducts(payload) {
  return {
    type: RECEIVE_PRODUCT,
    payload,
  };
}
