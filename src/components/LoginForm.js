import React from "react";
import { useState, useContext, useEffect } from "react";
import AuthHandlerContext from "../context/AuthHandlerContext";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState("");
  const { login, err } = useContext(AuthHandlerContext);

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

  const loginRequest = (evt) => {
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
    login(user);
  };

  return (
    <form>
      {/* Email Input */}
      {error !== "" ? (
        <span className="text-xs text-pink-600">{error}</span>
      ) : null}
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
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          value={user.password}
          onChange={onChangeHandler}
          required
        />
      </div>
      <div className="form-control mt-6">
        <input
          type="submit"
          className="btn btn-primary"
          onClick={loginRequest}
        />
      </div>
    </form>
  );
};

export default LoginForm;
