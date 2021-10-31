import React from "react";
import { Link } from "react-router-dom";

const MyOrder = () => {
  return (
    <div>
      <div className="">
        <div className="container text-center my-5">
          <h2>My Orders</h2>
          <Link to={`/shipping`}>
            <span>
              <button className=" view-btn btn btn-primary">Order Now</button>
            </span>
          </Link>
        </div>
        <div className="cart-container"></div>
      </div>
    </div>
  );
};

export default MyOrder;
