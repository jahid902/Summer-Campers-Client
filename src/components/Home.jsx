import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import BannerSlider from "../HomeComponents/BannerSlider";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Summer Campers || Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
    </>
  );
};

export default Home;
