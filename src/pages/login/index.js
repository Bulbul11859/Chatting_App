import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col mt-[20%] sml:mt-[5%] md:mt-[3%] items-end mr-[30px] sml:mr-[69px] text-regal-blue justify-center ">
        <div className="w-10/12">
          <h2 className="font-nunito font-bold text-2xl lg:text-4xl xl:text-5xl  ">
            Login to your account!
          </h2>
          <img className=" mt-5 cursor-pointer " src="images/google.png" />

          <div className="lg:w-3/4	xl:mt-12">
            <div className="relative">
              <input
                type="email"
                className="border-b border-solid border-black w-full xl:text-2xl  py-4 sml:pt-10 xl:pt-12 mt-9  outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0 xl:text-2xl ">
                Email Address
              </p>
            </div>

            <div className="relative">
              <input
                type="password"
                className="border-b border-solid border-black w-full  xl:text-2xl py-4 sml:pt-10 xl:pt-12 mt-9 outline-0 "
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0 xl:text-2xl ">
                Password
              </p>
            </div>
            <button class="bg-primary-color	 hover:bg-sky-700 w-full py-3 sml:py-5 rounded-[86px] text-white text-base lg:text-xl font-nunito	font-semibold mt-9	">
              Save changes
            </button>
            <p className="font-nunito	font-regular text-base lg:text-xl xl:text-2xl  mt-9 text-center mb-5">
              Already have an account ?{" "}
              <Link
                to="/registration"
                className="text-secondary-color font-bold cursor-pointer hover:underline"
              >
                Registration{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2	hidden md:block	">
        <picture>
          <img
            className="h-screen w-full object-cover"
            src="images/registration.webp"
            alt="no-image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Login;
