import React from "react";
import {Link
} from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col mt-[10%] items-end mr-[69px] text-regal-blue justify-center">
        <div className="w-[520px]">
          <h2 className="font-nunito font-bold text-4xl  text-center">
            Get started with easily register
          </h2>
          <p className="font-nunito font-regular text-xl mt-2.5 text-black">
            Free register and you can enjoy it
          </p>
          <div className="w-3/4	">
            <div className="relative">
              <input
                type="email"
                className="border border-solid border-black w-full rounded-lg px-14 py-6 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-4">
                Email Address
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                className="border border-solid border-black w-full rounded-lg px-14 py-6 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-4">
                Ful Name
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                className="border border-solid border-black w-full rounded-lg  px-14 py-6 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 left-8 bg-white px-4">
                Password
              </p>
            </div>
            <button class="bg-primary-color	 hover:bg-sky-700 w-full py-5 rounded-[86px] text-white text-xl font-nunito	font-semibold mt-9	">
              Save changes
            </button>
            <p className="font-nunito	font-regular text-xl mt-9 text-center">Already  have an account ? <Link         to='/login' className="text-secondary-color font-bold cursor-pointer hover:underline">Sign In </Link> </p>
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

export default Registration;
