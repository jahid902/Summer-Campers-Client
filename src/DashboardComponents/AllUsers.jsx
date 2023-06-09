import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Title from "../Shared/Title";
import Swal from "sweetalert2";

const AllUsers = () => {

    const {user} = useContext(AuthContext);
    const [peoples, setPeoples] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_api_url}/allUsers`)
        .then(res=>res.json())
        .then(data=> {
            setPeoples(data)
        })
    },[peoples])

    const handleAdmin = (id) => {

        const updatedRole = {role: "admin"}

        fetch(`${import.meta.env.VITE_api_url}/updateUser/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedRole)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Made Admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                const remaining = peoples.filter(people=> people?._id !== id)
                setPeoples(remaining);
        })
        .catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
    }

    const handleInstructor = (id) => {

        const updatedRole = {role: "instructor"}

        fetch(`${import.meta.env.VITE_api_url}/updateUser/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedRole)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Made Instructor',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                const remaining = peoples.filter(people=> people?._id !== id)
                setPeoples(remaining);
        })
        .catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
    }

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title={`Hi, ${user.displayName}`}
          text="When you wanna make some bold decision !! Look nowhere beside the Admin panel !!"
          subText="Make some decision's, make some change."
          colorText="Here are all the users --"
        ></Title>
      </div>

    <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make instructor</th>
            </tr>
          </thead>
          <tbody>
            {peoples.map((info,i)=>(
                <tr key={info?._id}>
                    <th>{i+1}</th>
                    <td>{info?.name}</td>
                    <td>{info?.email}</td>
                    <td>{info?.role}</td>
                    <td><button onClick={()=> handleAdmin(info?._id)} disabled={info?.role === 'admin'} className="btn btn-outline btn-secondary btn-sm">Make Admin</button></td>
                    <td><button onClick={()=> handleInstructor(info?._id)} disabled={info?.role === 'instructor'} className="btn btn-outline btn-secondary btn-sm">Make Instructor</button></td>
                </tr>
            ))}


          </tbody>
          </table>
          </div>

    </>
  );
};

export default AllUsers;
