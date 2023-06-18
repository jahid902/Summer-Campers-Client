import React from "react";
import Title from "../Shared/Title";

const Service = () => {
  return (
    <>
      <div className="w-full md:w-11/12 mx-auto mt-20 md:mt-32">
        <Title
          title="Our customer policies"
          text="We always try to provide the best services for our consumer's. We try our best to provide you with finest quality of service we can offer."
          subText="And we hope to never disappoint you."
          colorText=""
        ></Title>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-4 justify-center items-center   p-8 ">
      <div className="text-center flex flex-col items-center w-full">
          <img src="/responsible.png" className="w-20 h-20" alt="" />
          <h1 className="text-pink-500 font-bold text-lg">Responsibility</h1>
          <p>We are very responsible in taking care of kids every need. We look after them with caution's, so you don't need to worry.</p> 
        </div>
        <div className="text-center flex flex-col items-center w-full">
          <img src="/meeting.png" className="w-20 h-20" alt="" />
          <h1 className="text-pink-500 font-bold text-lg">Organized</h1>
          <p>
            We keep the kids together to build good understanding and communication between them. We've organized the camp in a way that all kids get sane amount of care and education.
          </p>
        </div>
        <div className="text-center flex flex-col items-center w-full ">
          <img src="/first-aid-kit.png" className="w-20 h-20" alt="" />
          <h1 className="text-pink-500 font-bold text-lg">Medical Support</h1>
          <p>
            Above all we care about children's safety and well-being. That's why we have 24/7 medical team active to provide any medical emergencies.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Service;
