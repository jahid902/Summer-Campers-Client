import React, { useContext, useEffect, useState } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Provider/AuthProvider";

const TeacherClasses = () => {
  const { user } = useContext(AuthContext);
  const [addedClass, setAddedClass] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_api_url}/addedClass/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAddedClass(data));
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title={`Hi, ${user.displayName}`}
          text="We are very glad that you are sharing your knowledge with us."
          subText="You are doing a good job in teaching kids new thing's."
          colorText="Here are all your classes --"
        ></Title>
      </div>
      
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Enrolled</th>
              <th>Price</th>
              <th>Admin Feedback</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {addedClass.map((singleClass,i)=>(
                <tr>
                <th>{i+1}</th>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.duration}</td>
                <td>{singleClass?.status}</td>
                <td>{singleClass?.enrolled}</td>
                <td>{singleClass?.price}</td>
                <td>{singleClass?.feedback ? singleClass?.feedback : "In Review"}</td>
                <button className="btn btn-sm mt-1 btn-secondary btn-outline">Update</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherClasses;
