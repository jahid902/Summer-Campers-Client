import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import { Helmet } from "react-helmet";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  // used axios to fetch data
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_api_url}/allTeachers`).then((data) => {
      setTeachers(data.data);
    });
  }, []);

  return (
    <>
    <Helmet>
      <title>Summer Campers || Instructors</title>
    </Helmet>
      <div className="w-full md:w-11/12 md:mx-auto my-8">
        <Title
          title="All of the Instructors we Have"
          text="Instructors at summer camps are extraordinary guides who will take you on incredible journeys of discovery."
          subText="They have secret knowledge about nature, science, and art that they can't wait to share with you."
          colorText=" Get ready for thrilling activities, new friendships, and unforgettable memories."
        ></Title>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full md:w-11/12 mx-auto">
        {teachers.map((teacher) => (
          <div key={teacher?._id} className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img  src={teacher?.image} alt="instructors" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Instructor Name : {teacher?.name}</h2>
              <p >
                Email : {teacher?.email}
              </p>
              <p>Class Name : {teacher?.className}</p>
              <p>Student's : {teacher?.students}</p>
              <p>Class Taken : {teacher?.classTaken}</p>
              <p>Rating : 5 / {teacher?.rating} <span className="text-yellow-500">Stars</span></p>
              <div className="card-actions justify-start">
                <button className="btn btn-sm btn-outline btn-secondary">
                  View Instructor
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTeachers;
