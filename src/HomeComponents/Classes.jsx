import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../Shared/Title";
import { Link } from "react-router-dom";


const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_api_url}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <>
      
      <div className="mt-24 md:mt-36">
        <div className="w-11/12 mx-auto">
          <Title
            title="Popular classes this Summer !!"
            text="Calling all young explorers and adventure enthusiasts! Get ready to embark on an unforgettable journey in the great outdoors this summer."
            subText="Our summer camping classes are here, and they're packed with thrilling activities, new friendships, and amazing experiences."
            colorText="Enroll Now Campers !! "
          ></Title>
        </div>

        <Swiper
          style={{ width: "90%" }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {classes.map((sub) => (
            <SwiperSlide key={sub._id}>
              <img className="h-[50vh] rounded-md" src={sub?.image} alt="" />
              <Link to="/allClass">
                <button className="btn btn-outline btn-secondary flex mx-auto mt-4">
                  {sub.name}
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Classes;
