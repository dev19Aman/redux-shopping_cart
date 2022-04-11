import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <div
          class="card cursor-pointer"
          style={{ width: "18rem", marginTop: "5rem" }}
        >
          <img
            class="card-img-top"
            src={image}
            alt={title}
            width="400px"
            height="300px"
          />
          <div class="card-body   ">
            <h5 class="card-title text-center">{title}</h5>
            <p class="card-text text-center">${price}</p>
            <span class=" " style={{ textDecoration: "none" }}>
              {category}
            </span>
          </div>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
