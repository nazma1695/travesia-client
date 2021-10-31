import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://polar-lowlands-04109.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 text-center">
            <h3 className=" text-warning">Details About {service.name}</h3>
            <p className="">
              Here you can know all about <span> {service.name}</span>. you can
              also book offers
            </p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-6 mt-5 ">
            <div>
              <h2> {service.name}</h2>
              <p>{service.description}</p>

              <div className="col-md-6">
                <h3
                  className=" "
                  style={{ fontSize: "30px", color: "rgb(88 88 88)" }}
                >
                  {service.days}Days
                </h3>
                <p
                  className=""
                  style={{
                    fontSize: "40px",
                    color: "blue",
                  }}
                >
                  ${service.price}
                </p>
              </div>
              <div className="col-md-6">
                <Link to={`/myOrder`}>
                  <span>
                    <button className=" view-btn btn btn-primary">
                      Book Your Travel
                    </button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={service.img} className="img-fluid py-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
