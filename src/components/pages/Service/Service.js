import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, description, price, days, img, _id } = service;
  return (
    <div className="service">
      <div className="service-card pb-5">
        <img src={img} alt="" />
        <div className="service-text">
          <h3>{name}</h3>
          <p className="px-3">{description}</p>
          {/* <button onClick={() => service.handleAddToOrder(service.product)}>
            Add to Order
          </button> */}

          <div className="row">
            <div className="col-md-6">
              <Link to={`/details/${_id}`}>
                <span>
                  <button className=" view-btn btn btn-primary mt-4">
                    View Your Travel
                  </button>
                </span>
              </Link>
            </div>
            <div className="col-md-6 float-end ">
              <h3
                className="float-end "
                style={{ fontSize: "30px", color: "rgb(88 88 88)" }}
              >
                {days}Days
              </h3>
              <br />
              <p
                className="float-end"
                style={{ fontSize: "40px", color: "blue", paddingLeft: "35px" }}
              >
                ${price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
