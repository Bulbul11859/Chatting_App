import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col mt-[3%] items-end mr-[69px] text-regal-blue justify-center">
        <div className="w-[520px]">
          <h2 className="font-nunito font-bold text-4xl   ">
          Login to your account!
          </h2>
          <img
            className=" mt-5 cursor-pointer"
            src="images/google.png"
           
          />
      
          <div className="w-3/4	">
            <div className="relative">
              <input
                type="email"
                className="border-b border-solid border-black w-full py-2  pt-12 mt-9  outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0  ">
                Email Address
              </p>
            </div>

            <div className="relative">
              <input
                type="password"
                className="border-b border-solid border-black w-full  py-2  pt-12 mt-9 outline-0"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-0  ">
                Password
              </p>
            </div>
            <button class="bg-primary-color	 hover:bg-sky-700 w-full py-5 rounded-[86px] text-white text-xl font-nunito	font-semibold mt-9	">
              Save changes
            </button>
            <p className="font-nunito	font-regular text-xl mt-9 text-center">
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
      <div className="w-1/2	">
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
