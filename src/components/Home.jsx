import React, { useContext } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    {/* React Helmet */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <div>this is home</div>
    </>
  );
};

export default Home;
