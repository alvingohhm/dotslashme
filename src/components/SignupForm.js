import React from "react";
import { useState, useContext, useEffect } from "react";
import AuthHandlerContext from "../context/AuthHandlerContext";

const SignupForm = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState("");
  const { signup, err } = useContext(AuthHandlerContext);

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  useEffect(() => {
    if (err !== "") {
      setError(err);
      clearError();
    }
  }, [err]);

  const onChangeHandler = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const signupRequest = (evt) => {
    evt.preventDefault();
    //check for empty field
    for (const key in user) {
      if (user[key].trim().length === 0) {
        setError("All fields are required");
        clearError();
        return;
      }
    }
    //proceed to login user
    signup(user);
  };

  return (
    <form className="">
      {/* Email Input */}
      {error !== "" ? (
        <span className=" text-md font-medium text-pink-600">{error}</span>
      ) : null}
      <div class="flex mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              name="first_name"
              type="text"
              placeholder="first name"
              className="input input-bordered"
              value={user.first_name}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              name="last_name"
              type="text"
              placeholder="last name"
              className="input input-bordered"
              value={user.last_name}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
      </div>
      <div class="flex mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={user.email}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
      </div>
      <div class="flex mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              value={user.password}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-control mt-6">
        <input
          type="submit"
          className="btn btn-primary"
          onClick={signupRequest}
        />
      </div>
    </form>
  );
};

export default SignupForm;
