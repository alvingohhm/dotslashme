import { useState, useContext, useEffect } from "react";
import AuthHandlerContext from "../../context/AuthHandlerContext";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const { logout, err, isauthorize } = useContext(AuthHandlerContext);

  return (
    <nav className="navbar mb-1 shadow-lg bg-neutral-focus text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Logo />
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            {isauthorize ? (
              <>
                <Link
                  to="/dashboard/profile"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Dashboard
                </Link>
                <button
                  className="btn btn-ghost btn-sm rounded-btn"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/signup" className="btn btn-ghost btn-sm rounded-btn">
                signup
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
