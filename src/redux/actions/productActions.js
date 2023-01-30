import { productActionTypes } from "../actionTypes/productActionTypes";
import productAPI from "../../apis/productApi";

// This is the expanded version of the below written thunk
// export const fetchProducts = () => {
//   return async (dispatch, getState) => {
//     const response = await productAPI.get("/products");
//     dispatch({
//       type: productActionTypes.FETCH_PRODUCTS,
//       payload: response.data,
//     });
//   };
// };

// export const fetchProducts = () => async (dispatch, getState) => {
//   const response = await productAPI.get("/products");
//   dispatch({
//     type: productActionTypes.FETCH_PRODUCTS,
//     payload: response.data,
//   });
// };

export const fetchProducts = () => ({
  type: productActionTypes.FETCH_PRODUCTS,
});

export const fetchProduct = (id) => ({
  type: productActionTypes.FETCH_PRODUCT,
  id,
});

export const removeSelectedProduct = () => {
  return {
    type: productActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
