import React from "react";
import Title from "../Shared/Title";
import Lottie from "lottie-react";
import lottieCamping from "../assets/135393-camp-guy.json";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// React awesome reveal animation
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Importance = () => {
  return (
    <div className="mt-28 md:mt-40">
      {/* title component */}
      <Title
        title="Why summer camps in summer ?"
        text="Summer camps are an absolute blast for kids! They're like stepping into a magical world filled with adventure, friends, and endless fun."
        subText=" Imagine spending your days exploring the great outdoors, trying exciting activities like Football, Hockey, and Archery."
        colorText="Are You Ready Campers?"
      ></Title>
      

      {/* React awesome reveal animation used*/}
      <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5 ">
        <div className="w-full md:w-1/2">
          <Reveal keyframes={customAnimation}>
            <Lottie animationData={lottieCamping} loop={true}></Lottie>
          </Reveal>
        </div>

        {/* Accordion and AOS */}
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
          className="join join-vertical w-full md:w-1/2 mt-6"
        >
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              1. What kinds of activities can I do at summer camp?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                At summer camp, you can enjoy a wide variety of activities such
                as swimming, hiking, arts and crafts, sports like soccer and
                basketball, talent shows, campfire storytelling, nature
                exploration, team-building games, and much more! There's always
                something exciting and new to try.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              2. Will I make new friends at summer camp?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Absolutely! Summer camp is an excellent place to make new
                friends. You'll meet kids from different backgrounds who share
                similar interests. You'll have plenty of opportunities to bond
                and have fun together during camp activities, meals, and free
                time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              3. What if I'm nervous about going to summer camp?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                It's normal to feel a little nervous before going to summer
                camp, especially if it's your first time. Remember that many
                other kids might feel the same way. Camp staff are there to help
                and support you, and they'll make sure you feel welcome and
                comfortable. Just be open to new experiences and be yourself -
                you'll soon find yourself having an amazing time!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              4. Will there be trained adults or counselors at summer camp?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Yes, there will be trained adults and counselors at summer camp.
                They are responsible for ensuring your safety, organizing
                activities, and helping you have a great experience. If you have
                any questions or need assistance, you can always reach out to
                them.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              5. Can I choose the activities I want to participate in?
            </div>
            <div className="collapse-content">
              <p className="font-medium">
                Most summer camps provide a schedule of activities, but they
                often offer a range of options for campers to choose from. You
                may have the opportunity to sign up for activities based on your
                interests. It's a chance to try new things and discover what you
                enjoy the most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importance;
