import React from "react";
import Title from "../Shared/Title";
import { useState } from "react";
import { useEffect } from "react";
import { GiCancel} from 'react-icons/Gi';
import { FcCheckmark} from 'react-icons/Fc';

const AllCourses = () => {

    const[allClass, setAllClass] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_api_url}/allClass`)
          .then((res) => res.json())
          .then((data) => {
            setAllClass(data);
          });
      }, []);

      const handleApprove = (id) => {
            console.log(id);
            // todo approve
      }

      const handleDelete = (id) => {
        console.log(id);
        // todo delete
      }

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title="Hey There Admin All Courses Are Here!"
          text="Here you can see approve button for pending courses, you can deny to simply remove a class."
          subText=""
          colorText=""
        ></Title>
      </div>

    <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Image</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Enrolled</th>
              <th>Seats</th>
              <th>Status</th>
              <th>Deny</th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((singleClass,i)=>(
                <tr key={singleClass?._id}>
                <th>{i+1}</th>
                <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singleClass?.image} alt="class avatar" />
              </div>
              </div>
              </td>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.instructor}</td>
                <td>{singleClass?.price}$</td>
                <td>{singleClass?.duration}</td>
                <td>{singleClass?.enrolled}</td>
                <td>{singleClass?.availableSeats}</td>
                <td>{singleClass?.status === 'pending' ? <button onClick={()=>handleApprove(singleClass?._id)} className="btn btn-outline btn-secondary btn-sm"><FcCheckmark size={20}></FcCheckmark></button> : singleClass?.status}</td>
                <td><button onClick={()=>handleDelete(singleClass?._id)} className="btn btn-outline btn-secondary btn-sm"><GiCancel size={20}></GiCancel></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default AllCourses;
