import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product ">
              <img src={image} alt={title} width="300px" />
            </div>
            <div className="col-md-6 d-flex flex-column justiy-content-center">
              <h1 className="display-5 fw-bold">{title}</h1>
              <hr />
              <h2 className="my-4">${price}</h2>
              <p className="lead">{category}</p>
              <p className="lead">{description}</p>
              {/* <button
              className="btn btn-outline-primary my-5"
            >{X}
            </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
