import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SingleSecondShop = ({
  image,
  speciality,
  pname,
  price,
  discount,
  description,
}) => {
  const Navigate = useNavigate();
  const { state } = useLocation();
  const { result } = state;

  const onMoreDetails = () => {
    Navigate("/shopDetails", { state: { result } });
  };

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="product mb-30">
          <div className="product__img">
            <Link to="/shopDetails">
              <img src={image} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="product-list-content pt-10 mb-30">
          <div className="product__content mb-20">
            <h4>
              <span className="pro-cat">
                <a href="#">{speciality}</a>
              </span>
            </h4>
            <h3 className="pro-title">
              <a href="#">{pname}</a>
            </h3>
            <h4>
              <div className="price">
                <span>{price}</span>
                <span className="old-price">{discount}</span>
              </div>
            </h4>
          </div>
          <p>{description}</p>
          <div className="product-action-list">
            <Link to="/register" className="primary_btn btn-icon ml-0">
              <span>+</span> Add Procedure to Cart
            </Link>

            <button className="action-btn" onClick={onMoreDetails}>
              <i className="fas fa-expand"></i> More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSecondShop;
