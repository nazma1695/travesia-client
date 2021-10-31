import React from "react";
import tour1 from "../../../images/tour1.jpg";
import tour2 from "../../../images/tour2.jpg";
import tour3 from "../../../images/tour3.jpg";
import tour4 from "../../../images/tour4.jpg";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-md-3 m-0 p-0">
            <img src={tour1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 m-0 p-0">
            <img src={tour2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 m-0 p-0">
            <img src={tour3} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 m-0 p-0">
            <img src={tour4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
