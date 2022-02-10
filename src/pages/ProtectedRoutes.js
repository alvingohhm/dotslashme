import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthHandlerContext from "../context/AuthHandlerContext";

const ProtectedRoutes = () => {
  const { isauthorize } = useContext(AuthHandlerContext);
  return isauthorize ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
