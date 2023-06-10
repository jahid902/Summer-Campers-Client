import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Title from "../Shared/Title";

const EnrolledClasses = () => {
  const [paidClass, setPaidClass] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_api_url}/userEnrolledClasses?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPaidClass(data);
      });
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title={`Hi, ${user.displayName}`}
          text="These are all the classes you paid for, your enrollment is listed."
          subText=""
          colorText=""
        ></Title>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>

          {paidClass.map((singleClass,i)=>(
                <tr key={singleClass?._id}>
                <th>{i+1}</th>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.instructor}</td>
                <td>{singleClass?.price} $</td>
                <td>{singleClass?.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrolledClasses;
