import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import lottieSignUp from "../assets/106364-login.json"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import SocialLogin from "../Shared/SocialLogin";
import { FaEye } from 'react-icons/fa';
import { useState } from "react";

const SignUp = () => {
  const { signUpUser, profileUpdate, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.password === data.recheck) {
      signUpUser(data.email, data.password).then((result) => {
        const user = result.user;
        console.log(user);

        profileUpdate(data.name, data.image)
          .then(() => {
            const newUser = {
              name: data.name,
              email: data.email,
              role: data.role,
            };
            fetch(`${import.meta.env.VITE_api_url}/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
                logOut()
                .then(result=>{
                  const data = result;
                })
                .catch(error=>{
                  console.log(error.message);
                })
                navigate('/signIn')
              });
          })
          .catch((e) => console.log(e));
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password didn't match",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Summer Campers || SignUp</title>
      </Helmet>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen w-full md:w-1/2 lg:text-left">
            <Lottie
              className="h-full "
              animationData={lottieSignUp}
              loop={true}
            ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3">
              <h1 className="text-4xl font-bold text-center text-pink-400  rounded-md inline-block p-2">
                Sign up now!!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Name
                  </span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Role
                  </span>
                </label>
                <select {...register("role")}>
                  <option value="student">Student</option>
                </select>
                {errors.role && (
                  <span className="text-red-600">Role is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Image
                  </span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="url"
                  name="image"
                  placeholder="Image url"
                  className="input input-bordered"
                />
                {errors.image && (
                  <span className="text-red-600">Image is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                  })}
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <FaEye onClick={()=>setShow(!show)} size={20} className="cursor-pointer absolute top-14 right-5"></FaEye>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one capital letter, one special character
                    and at least 6 characters.
                  </p>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-lg font-bold text-pink-400">
                    Confirm Password
                  </span>
                </label>
                <input
                  {...register("recheck", {
                    required: true,
                    minLength: 6,
                  })}
                  type={confirmShow ? "text" : "password"}
                  name="recheck"
                  placeholder="Retype your password"
                  className="input input-bordered"
                />
                <FaEye onClick={()=>setConfirmShow(!confirmShow)} size={20} className="cursor-pointer absolute top-14 right-5"></FaEye>
                {errors.recheck?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
              </div>
              <div>
                <label className="label inline-block">
                  Already have an account?
                  <Link
                    to="/signIn"
                    className="label-text-alt text-pink-400 font-bold text-base link link-hover"
                  >
                    Sign in here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Sign Up
                </button>
              </div>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
