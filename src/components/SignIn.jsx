import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import lottieSignIn from "../assets/117764-sign-up.json";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/signIn";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password).then((result) => {
      const user = result.user;
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login Successful.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, {replace:true});
    });
  };

  return (
    <>
      <Helmet>
        <title>Summer Campers || SignIn</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen flex my-auto w-full md:w-1/2 lg:text-left">
            <Lottie
              className="h-full mt-20"
              animationData={lottieSignIn}
              loop={true}
            ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-3">
              <h1 className="text-4xl font-bold text-center text-pink-400  rounded-md inline-block p-2">
                Sign In
              </h1>
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
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.recheck?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
              </div>
              <div>
                <label className="label inline-block">
                  New here?
                  <Link
                    to="/signUp"
                    className="label-text-alt text-pink-400 font-bold text-base link link-hover"
                  >
                    Sign up here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
