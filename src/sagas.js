import { call, put, takeEvery } from "redux-saga/effects";
import { productActionTypes } from "./redux/actionTypes/productActionTypes";
import productApi from "./apis/productApi";

// Fetch Products
function fetchProducts() {
  return productApi.get("/products").then((res) => res.data);
}

function* workFetchProducts() {
  const products = yield call(fetchProducts);
  console.log(products);
  yield put({
    type: productActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });
}

// Fetch Product
function* workFetchProduct(action) {
  const product = yield productApi.get(`products/${action.id}`);
  const productData = yield product.data;
  yield put({
    type: productActionTypes.FETCH_PRODUCT_SUCCESS,
    payload: productData,
  });
}

// Saga
function* saga() {
  yield takeEvery(productActionTypes.FETCH_PRODUCTS, workFetchProducts);
  yield takeEvery(productActionTypes.FETCH_PRODUCT, workFetchProduct);
}
export default saga;
