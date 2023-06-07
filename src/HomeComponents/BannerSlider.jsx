import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const BannerSlider = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto mt-8">
      <AwesomeSlider className="h-full md:h-[100vh]">
        <div>
          <img
            src="/pretty-young-curly-boy-casual-clothes-white-wall-confident-cool-with-sport-bat-caucasian-male-preschooler-with-bright-facial-emotions-childhood-expression-having-fun.jpg"
            alt=""
          />
        </div>

        <div className="md:h-[100vh]">
          <img src="/kids-football-equipment-getting-ready-match.jpg" alt="" />
        </div>

        <div>
          <img src="/full-shot-kids-playing-kickball-field.jpg" alt="" />
        </div>
        <div className="md:h-[100vh]">
          <img src="/kids-shaking-hands-before-game.jpg" alt="" />
        </div>
        <div>
          <img
            src="/two-multiracional-brothers-playing-basketball-court-near-park.jpg"
            alt=""
          />
        </div>
        <div>
          <img src="/field-hockey-player-equipment-grass.jpg" alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default BannerSlider;
