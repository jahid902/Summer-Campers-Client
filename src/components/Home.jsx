import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import BannerSlider from "../HomeComponents/BannerSlider";
import Importance from "../HomeComponents/Importance";
import Classes from "../HomeComponents/Classes";
import Teachers from "../HomeComponents/Teachers";
import KnowMore from "../HomeComponents/KnowMore";
import Feedback from "../HomeComponents/Feedback";

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
      <KnowMore></KnowMore>
      <Feedback></Feedback>
    </>
  );
};

export default Home;
