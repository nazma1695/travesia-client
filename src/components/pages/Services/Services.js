import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://polar-lowlands-04109.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <div className="text-center pb-5">
        <h2 className="">The Best Tours</h2>
        <p className="">
          Hot offers for the most amazing tours around the world
        </p>
      </div>
      <div className="container">
        <div className="service-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
