import React, { useContext, useEffect, useState } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const StudentClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_api_url}/userClasses?email=${user?.email}`)
    .then(res=> res.json())
    .then(data=> {
      setClasses(data);
    })
  }, []);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't get it back!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_api_url}/classDlt/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = classes.filter(info=> info._id !== id);
            setClasses(remaining);
        })
      }
    });
  };

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title={`Hi, ${user.displayName}`}
          text="This page shows all the Classes you've selected. I see you want some serious activities this summer!!"
          subText="We love it cuz, the more you learn, the more you grow, so keep it up."
          colorText="Here are all your classes --"
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
              <th>Enrolled</th>
              <th>Seats</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass,i)=>(
                <tr key={singleClass?._id}>
                <th>{i+1}</th>
                <td>{singleClass?.name}</td>
                <td>{singleClass?.instructor}</td>
                <td>{singleClass?.price} $</td>
                <td>{singleClass?.duration}</td>
                <td>{singleClass?.enrolled}</td>
                <td>{singleClass?.availableSeats}</td>
                <td><button onClick={()=>handleDelete(singleClass?._id)} className="btn btn-outline btn-secondary btn-sm">Delete</button></td>
               <td><Link to={`/dashboard/payment/${singleClass?._id}`}><button className="btn btn-outline btn-secondary btn-sm">Pay</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentClasses;
