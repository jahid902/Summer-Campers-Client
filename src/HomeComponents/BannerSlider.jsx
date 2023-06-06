import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const BannerSlider = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto mt-8">
      <AwesomeSlider className="h-full md:h-[100vh]">
        <div>
          <img
            src="../../public/full-shot-kids-playing-kickball-field.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="../../public/field-hockey-player-equipment-grass.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="../../public/kids-football-equipment-getting-ready-match.jpg"
            alt=""
          />
        </div>
        <div>
          <img src="../../public/kids-shaking-hands-before-game.jpg" alt="" />
        </div>
        <div>
          <img
            src="../../public/two-multiracional-brothers-playing-basketball-court-near-park.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="../../public/pretty-young-curly-boy-casual-clothes-white-wall-confident-cool-with-sport-bat-caucasian-male-preschooler-with-bright-facial-emotions-childhood-expression-having-fun.jpg"
            alt=""
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default BannerSlider;
