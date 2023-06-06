import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import pageError from "../assets/page-not-found.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <Lottie className="w-2/4" animationData={pageError} loop={true}></Lottie>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl text-red-500 font-bold">
            {error?.message}
          </h1>
          <p className="text-2xl font-bold text-red-500 my-3">
            {status || 404}
          </p>
          <Link to="/">
            <button className="btn btn-error">Take me home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
