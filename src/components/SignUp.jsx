import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottiesignup from "../assets/23640-sign-in-or-sign-up-animation.json";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen w-full md:w-1/2 lg:text-left">
            <Lottie
              className="h-full w-96"
              animationData={lottiesignup}
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
                  <option value="instructor">Instructor</option>
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
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
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

              <div className="form-control">
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
                  type="password"
                  name="recheck"
                  placeholder="Retype your password"
                  className="input input-bordered"
                />
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
                <button type="submit" className="btn btn-outline btn-secondary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
