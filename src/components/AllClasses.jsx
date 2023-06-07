import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";

const AllClasses = () => {
  const [allClass, setAllClass] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_api_url}/allClass`)
      .then((res) => res.json())
      .then((data) => {
        setAllClass(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="w-full md:w-11/12 md:mx-auto my-8">
        <Title
          title="All of the classes we provide"
          text="Join our exciting sports summer camps and unleash your passion for athletics! Whether you're a fan of cricket, football, basketball, tennis, or swimming, we have the perfect camp for you. "
          subText=""
          colorText=""
        ></Title>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full md:w-11/12 mx-auto">
        {allClass.map((sub) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={sub?.image} alt="classes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name : {sub?.name}</h2>
              <h2 className="card-title">Instructor : {sub?.instructor}</h2>
              <p>Course Fee : {sub?.price}$</p>
              <p>Available Seats : {sub?.availableSeats}</p>
              <div className="card-actions justify-start">
                <button className="btn btn-outline btn-secondary">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClasses;
