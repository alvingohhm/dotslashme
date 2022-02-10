import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">Need Resume Fast?</h1>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            accusantium eos, illo eum saepe modi mollitia doloremque pariatur
            error reprehenderit natus omnis earum quaerat facilis deleniti quia
            expedita nobis necessitatibus! Provident cupiditate voluptatem et
            in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <LoginForm />
            <div className=" mt-3 text-sm ">
              Don't have an account ?
              <Link
                to="/signup"
                className="mx-1 cursor-pointer text-cyan-300 hover:text-cyan-500"
              >
                Sign up?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
