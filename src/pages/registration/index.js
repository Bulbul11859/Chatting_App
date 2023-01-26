import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  let [email, setEmail] = useState("");
  let [fullname, setFullname] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [fullnameerr, setFullnameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [show, setShow] = useState(false);
  let [ferr, setFerr] = useState("");
  let [success, setSuccess] = useState("");
  let [loading, setLoading] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handleFullName = (e) => {
    setFullname(e.target.value);
    setFullnameerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("*Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerr("*Valid email is required");
      }
    }

    if (!fullname) {
      setFullnameerr("Full name is required");
    } else {
      if (fullname.length <= 2) {
        setFullnameerr("Full must be greater than 2");
      }
    }

    if (!password) {
      setPassworderr("Password name is required");
    }
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col mt-[50px] sml:mt-[5%] md:mt-[3%] items-end mr-[30px] sml:mr-[69px] text-regal-blue justify-center">
        <div className="w-10/12">
          <h2 className="font-nunito font-bold text-2xl lg:text-4xl xl:text-5xl ">
            Get started with easily register
          </h2>
          <p className="font-nunito font-regular text-base lg:text-xl xl:text-2xl mt-2.5 text-black">
            Free register and you can enjoy it
          </p>
          <div className="lg:w-3/4	xl:mt-12">
            <div className="relative">
              <input
                type="email"
                className="border border-solid border-black w-full rounded-lg font-semibold xl:text-2xl px-6 lg:px-14 py-4 sml:py-6 lg:py-4 xl:py-8 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                onChange={handleEmail}
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 xl:text-2xl left-8 bg-white px-4">
                Email Address
              </p>
              {emailerr && (
                <p className="font-nunito font-semibold font-sm co text-red-500	  rounded">
                  {emailerr}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                className="border border-solid border-black w-full rounded-lg font-semibold xl:text-2xl px-6 lg:px-14 py-4 sml:py-6 lg:py-4 xl:py-8 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                onChange={handleFullName}
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 xl:text-2xl left-8 bg-white px-4">
                Ful Name
              </p>
              {fullnameerr && (
              <p className="font-nunito font-semibold font-sm text-red-500 p-1 rounded ">
                {fullnameerr}
              </p>
            )}
            </div>
            <div className="relative">
              <input
                type="password"
                className="border border-solid border-black w-full rounded-lg font-semibold xl:text-2xl  px-6 lg:px-14 py-4 sml:py-6 lg:py-4 xl:py-8 mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                onChange={handlePassword}
              />
              <p className="font-nunito font-semibold font-sm absolute top-6 xl:text-2xl left-8 bg-white px-4">
                Password
              </p>
              {passworderr && (
              <p className="font-nunito font-semibold font-sm text-red-500 p-1 rounded ">
                {passworderr}
              </p>
            )}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-primary-color	 hover:bg-sky-700 w-full py-3 sml:py-5 rounded-[86px] text-white text-base lg:text-xl font-nunito	font-semibold mt-9	"
            >
              Save changes
            </button>
            <p className="font-nunito	font-regular text-base lg:text-xl xl:text-2xl mt-9 text-center mb-5 md:mb-0">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-secondary-color font-bold cursor-pointer hover:underline"
              >
                Sign In{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2	hidden md:block">
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
