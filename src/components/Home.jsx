import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Shared/NavBar";
import BannerSlider from "../HomeComponents/BannerSlider";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Summer Campers || Home</title>
      </Helmet>
      <NavBar></NavBar>
      <BannerSlider></BannerSlider>
    </>
  );
};

export default Home;
