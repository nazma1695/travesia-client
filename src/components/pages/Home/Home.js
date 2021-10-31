import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Travel from "../Travel/Travel";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Clients></Clients>
      <Gallery></Gallery>
      <Travel></Travel>
    </div>
  );
};

export default Home;
