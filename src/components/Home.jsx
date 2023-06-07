import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import BannerSlider from "../HomeComponents/BannerSlider";
import Importance from "../HomeComponents/Importance";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Summer Campers || Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <Importance></Importance>
    </>
  );
};

export default Home;
