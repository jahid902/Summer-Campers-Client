import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import BannerSlider from "../HomeComponents/BannerSlider";
import Importance from "../HomeComponents/Importance";
import Classes from "../HomeComponents/Classes";
import Teachers from "../HomeComponents/Teachers";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Summer Campers || Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <Importance></Importance>
      <Classes></Classes>
      <Teachers></Teachers>
    </>
  );
};

export default Home;
