import React, { useContext } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handlePost = (event) => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const oldPrice = form.price.value;
    const price = Math.round(parseFloat(oldPrice));
    const duration = form.duration.value;
    const instructor = form.instructor.value;
    const oldAvailableSeats = form.availableSeats.value;
    const availableSeats = Math.round(parseFloat(oldAvailableSeats))
    const oldEnrolled = form.enrolled.value;
    const enrolled = Math.round(parseFloat(oldEnrolled))
    const status = form.status.value;
    const email = form.email.value;
    const description = form.description.value;

    const newClass = {
        name,
        image,
        price,
        duration,
        instructor,
        availableSeats,
        enrolled,
        status,
        email,
        description
    } 

    console.log(newClass);
    fetch(`${import.meta.env.VITE_api_url}/addClass`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newClass)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                "Your Class Is Posted!!",
                "Admin will Approve the class.",
                'success'
              )
        }
    })
    form.reset();

  };

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title="Add Classes"
          text="Share your knowledge and deepen your understanding by adding additional classes."
          subText=""
          colorText=""
        ></Title>
      </div>

      <div>
        <form onSubmit={handlePost} className=" bg-pink-200 p-8 rounded-lg">
          {/* main grid div */}

          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Course name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Class Name"
                required
                className="input input-bordered"
              />
            </div>
            {/* 2 div between */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Course Image
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Class Image"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Course Fee
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                required
                className="input input-bordered"
              />
            </div>
            {/* 2 div between */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Duration
                </span>
              </label>
              <input
                type="text"
                name="duration"
                placeholder="Class Duration"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Instructor Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="instructor"
                disabled
                className="input input-bordered"
              />
            </div>
            {/* 2 div between */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Available Seats
                </span>
              </label>
              <input
                type="number"
                name="availableSeats"
                placeholder="Available Seats"
                required
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Enrolled Students
                </span>
              </label>
              <input
                type="number"
                name="enrolled"
                placeholder="Enrolled"
                defaultValue="0"
                disabled
                className="input input-bordered"
              />
            </div>
            {/* 2 div between */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Instructor Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Class Description
                </span>
              </label>
              <textarea
                className="textarea textarea-secondary"
                name="description"
                placeholder="Class Description"
                required
              ></textarea>
            </div>
            {/* 2 div between */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-lg font-bold text-pink-700">
                  Update Status
                </span>
              </label>
              <input
                type="text"
                name="status"
                defaultValue="pending"
                disabled
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control w-1/3 mt-6 mx-auto">
            <button
              type="submit"
              className="btn text-white btn-secondary hover:bg-pink-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
