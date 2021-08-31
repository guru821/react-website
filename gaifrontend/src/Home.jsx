import React from "react";
import web from "../src/images/img1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <Common
      name="Grow you business with"
      imgsrc={web}
      visit="/services"
      btname="Get Started"
    />
  );
};

export default Home;
