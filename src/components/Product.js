import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, image, title, price, category } = product;
  return (
    <div className="four column wide" style={{ width: "25%" }}>
      <Link to={`/products/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image" style={{ height: "300px", width: "100%" }}>
              <img
                src={image}
                alt="title"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
