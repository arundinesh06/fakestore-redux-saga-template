import { productActionTypes } from "../actionTypes/productActionTypes";
const initialState = {
  products: [],
  product: {},
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // case productActionTypes.FETCH_PRODUCTS:
    //   return { ...state, products: payload };
    case productActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case productActionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case productActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} };
    default:
      return state;
  }
};
