import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Title = ({title, text, subText, colorText}) => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50" className="text-center space-y-3 mb-4 md:mb-12">
        <h1 className="text-5xl font-bold text-pink-400">
          {title} ?
        </h1>
        <p className="text-lg ">
          {text} <br /> {subText} <br />
          <span className="font-semibold text-pink-500">{colorText}</span>
        </p>
      </div>
    );
};

export default Title;