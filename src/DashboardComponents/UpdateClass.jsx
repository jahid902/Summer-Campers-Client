import React from "react";
import Title from "../Shared/Title";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const { id } = useParams();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const enrolled = form.enrolled.value;
    const duration = form.duration.value;
    const updatedClass = {
      price,
      enrolled,
      duration,
    };
    fetch(`${import.meta.env.VITE_api_url}/singleClass/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data.modifiedCount);
          Swal.fire(
            "Your Class Is Updated!!",
            "Price, Enrolled and Duration status updated",
            "success"
          );
        }
      });
    form.reset();
  };

  return (
    <>
      <div className="w-11/12 mx-auto my-2 md:my-4">
        <Title
          title="Update Class Information"
          text="Opp's made some mistake, worry not we've got you !!"
          subText=""
          colorText=""
        ></Title>
      </div>

      <div className="card mx-auto  w-full max-w-lg shadow-2xl bg-pink-200">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-lg font-bold text-pink-500">
                Price
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Updated Price"
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-bold text-pink-500">
                Enrolled
              </span>
            </label>
            <input
              type="number"
              name="enrolled"
              placeholder="Update Enrollment"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-bold text-pink-500">
                Duration
              </span>
            </label>
            <input
              type="text"
              name="duration"
              placeholder="Update Duration"
              required
              className="input input-bordered"
            />
          </div>
          <div>
            <Link
              to="/dashboard/allClasses"
              className="label-text-alt text-pink-500 font-bold text-base link link-hover"
            >
              Go To All Classes
            </Link>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-secondary text-lg" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateClass;
