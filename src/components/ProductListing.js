import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../redux/actions/productActions";
import Loader from "../components/Loader";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   console.log("About to fetch products");
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(response);
  //   dispatch(setProducts(response.data));
  // };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products:", products);
  return (
    <div className="ui grid container" style={{ paddingTop: "100px" }}>
      {Object.keys(products).length === 0 ? (
        <Loader />
      ) : (
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })
      )}
    </div>
  );
};

export default ProductListing;
