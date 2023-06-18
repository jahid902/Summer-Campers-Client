import React from "react";
import Title from "../Shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "./css/feedback.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = () => {
  return (
    <div className="mt-20 md:mt-36 w-11/12 mx-auto">
      <div>
        <Title
          title="Customer feedbacks"
          text="Customer feedback's are always a plus point for us. This feedback's highlight our camp pretty well."
          subText=""
          colorText=""
        ></Title>
      </div>

      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full md:w-11/12"
        >
          <SwiperSlide>
            <div className="flex flex-col p-6 text-center items-center space-y-4">
              <img
                className="w-16 h-16  rounded-full"
                src="https://i.ibb.co/r3Src7R/portrait-white-man-isolated.jpg"
              />
              <p>John Robinson</p>
              <p className="border-b-2 pb-4">
                "The summer camp exceeded our expectations! The staff was
                attentive and friendly, creating a welcoming atmosphere. The
                activities were diverse and kept our child entertained
                throughout. They came home with new skills and cherished
                memories. Highly recommend this camp!"
              </p>
              <Rating style={{ maxWidth: 150 }} value={4} readOnly />
              <p>Good Experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-6 text-center items-center space-y-4">
              <img
                className="w-16 h-16  rounded-full"
                src="https://i.ibb.co/HTrTY6J/close-up-portrait-curly-handsome-european-male.jpg"
              />
              <p>Jack Dawson</p>
              <p className="border-b-2 pb-4">
                "We were thrilled with our decision to enroll our child in your
                summer camp. The program was well-organized, offering a perfect
                blend of learning and fun. The counselors were exceptional,
                fostering a supportive and inclusive environment. Our child
                returned with newfound confidence and a bunch of amazing
                friends. Thank you for an unforgettable summer experience!"
              </p>
              <Rating style={{ maxWidth: 150 }} value={5} readOnly />
              <p>Excellent Experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-6 text-center items-center space-y-4">
              <img
                className="w-16 h-16  rounded-full"
                src="https://i.ibb.co/ZgqdDFV/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg"
              />
              <p>Zlatan Zanneti</p>
              <p className="border-b-2 pb-4">
                "Our experience with your summer camp was absolutely fantastic!
                The staff was incredibly friendly and attentive, ensuring the
                safety and enjoyment of all the campers. The range of activities
                provided a perfect balance of adventure and creativity, keeping
                our child engaged and excited every day. They came home with
                wonderful memories and lifelong friendships. Thank you for an
                incredible summer camp!"
              </p>
              <Rating style={{ maxWidth: 150 }} value={3} readOnly />
              <p>Average Experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-6 text-center items-center space-y-4">
              <img
                className="w-16 h-16  rounded-full"
                src="https://i.ibb.co/zH6sn6K/portrait-smiling-blonde-woman.jpg"
              />
              <p>Rose Dawson</p>
              <p className="border-b-2 pb-4">
                "I can't say enough positive things about our experience with
                your summer camp. The level of organization and attention to
                detail was remarkable. The counselors were passionate and
                dedicated, fostering a supportive and encouraging environment.
                Our child had a blast participating in a variety of engaging
                activities and formed lasting friendships. We couldn't be
                happier with the memories they made. Thank you for an
                exceptional summer camp!"
              </p>
              <Rating style={{ maxWidth: 150 }} value={5} readOnly />
              <p>Excellent Experience</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col p-6 text-center items-center space-y-4">
              <img
                className="w-16 h-16  rounded-full"
                src="https://i.ibb.co/Jpt9dmd/porait-cute-boy-cafe.jpg"
              />
              <p>James Maddison</p>
              <p className="border-b-2 pb-4">
                "We are beyond impressed with the summer camp we chose for our
                child. The staff went above and beyond to create a safe and
                inclusive environment where every child felt valued. The range
                of activities was outstanding, catering to different interests
                and abilities. Our child's confidence soared, and they came home
                with a newfound love for learning. Thank you for an amazing
                summer camp experience!"
              </p>
              <Rating style={{ maxWidth: 150 }} value={4} readOnly />
              <p>Good Experience</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
