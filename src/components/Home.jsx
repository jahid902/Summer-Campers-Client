import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Shared/NavBar";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Summer Campers || Home</title>
      </Helmet>
      <NavBar></NavBar>
      <div>this is home</div>
    </>
  );
};

export default Home;
