import React, { useEffect, useState } from "react";
import Title from "../Shared/Title";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_api_url}/teachers`)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  return (
    <>
      <div className="mt-20 md:mt-36 w-11/12 mx-auto">
        <Title
          title="Our Best Teachers "
          text='"Hey kids! Are you excited about summer camps?" Well, get ready to meet some amazing teachers who will make your summer unforgettable!'
          subText="Our summer camp teachers are not just experts in their fields, they are super fun too! They are superheroes of the summer camp."
          colorText="Excited To Meet Them in Person? Here Are some Teachers With Most Student's."
        ></Title>
        <div
        data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          {teachers.map((teacher) => (
            <div
              key={teacher?._id}
              className="overflow-hidden relative transition duration-700 transform hover:-translate-y-2 rounded shadow-2xl hover:shadow-4xl"
            >
              <img
                src={teacher?.image}
                alt="book cover"
                className="object-cover w-full h-80 md:h-80 xl:h-80"
              />
              <div className="bg-black px-6 py-4 bg-opacity-80 opacity-0 hover:opacity-100 text-gray-300 text-start absolute inset-0 transition-opacity duration-500 flex flex-col">
                <p className="font-bold text-md">Name : {teacher?.name}</p>
                <br />
                <p className="font-bold text-md">
                  Faculty : {teacher?.className}
                </p>

                <br />
                <p className="font-bold text-md">
                  Students : {teacher?.students} kids
                </p>
                <br />
                <p className="font-bold text-md">
                  Classes Taken : {teacher?.classTaken}
                </p>

                <br />
                <p className="font-bold text-md">Position : {teacher?.role}</p>
                <br />
                <p className="font-bold text-md">
                  Rating: {teacher?.rating} <span className="text-yellow-500">Stars</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teachers;
