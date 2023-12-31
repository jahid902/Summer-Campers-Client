import React from "react";
import Title from "../Shared/Title";
import { useState } from "react";
import { useEffect } from "react";
import { GiCancel} from 'react-icons/Gi';
import { FcCheckmark} from 'react-icons/Fc';
import Swal from "sweetalert2";

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
            const updatedStatus = {
              status: 'approved'
            }
            fetch(`${import.meta.env.VITE_api_url}/specificClass/${id}`,{
              method:'PATCH',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(updatedStatus)
            })
            .then(res=>res.json())
            .then(data=> {
              if (data.modifiedCount > 0) {
                Swal.fire(
                  "Class Is Approved!!",
                  "Now student's can see the class",
                  "success"
                );
              }
              fetch(`${import.meta.env.VITE_api_url}/allClass`)
              .then(res=>res.json())
              .then(allData=> setAllClass(allData))
              
            })
            .catch(err => console.log(err))

      }

      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete it?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_api_url}/specificClassDlt/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire("Deleted!", "The course is deleted.", "success");
                }
                const remaining = allClass.filter(info=> info._id !== id);
                setAllClass(remaining);
            })
          }
        });
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
