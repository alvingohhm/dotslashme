import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Shared/Logo";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div class="container mx-auto md:flex md:justify-center">
      <div class="md:flex flex-col md:justify-center ">
        <div class="md:flex md:justify-center mt-10">
          <Logo
            height={"150px"}
            width={"150px"}
            bgColor={"#3C4450"}
            dot={"#000000"}
            slash={"#00000"}
          />
        </div>
        <p className="text-lg text-center mb-5 text-info">
          It is all about me. Welcome to me Resume Builder site
        </p>

        <div className="card shadow-2xl flex-shrink-0 bg-base-100">
          <div className="card-body">
            <SignupForm />
            <div className=" mt-3 text-sm ">
              Have an account ?
              <Link
                to="/"
                className="mx-1 cursor-pointer text-cyan-300 hover:text-cyan-500"
              >
                Login Instead?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
