import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Shared/Title";
AOS.init();

const KnowMore = () => {
  return (
    <>
      <div className="w-full md:w-11/12 mx-auto mt-20 md:mt-32">
          <Title
            title="Let's clear some confusion !!"
            text="Worry not !! You can Email us for any queries."
            subText=""
            colorText=""
          ></Title>
        </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="hero min-h-screen w-full md:w-11/12 mx-auto rounded-md"
        style={{
          backgroundImage: `url("https://i.ibb.co/Hh8b1ZZ/Know-More-Camp.jpg")`
        }}
      >
        <div className="hero-overlay bg-opacity-40 rounded-md"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-extrabold text-pink-500">
              Is Summer Campers Worth It ?
            </h1>
            <p className="mb-5 text-lg font-semibold">
              Theres always some doubt in doing some things. Is it gonna benefit
              me? Do I really need it? What if it does'nt work out? Worry not
              these are some question we all go through. Thats why we offered an
              support Email for all of your queries.
            </p>
            <button className="btn btn-secondary btn-md">Email us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
