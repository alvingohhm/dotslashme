import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosExec from "../utility/axiosProcess";

const AuthHandlerContext = createContext();

export const AuthHandlerProvider = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [isauthorize, setIsauthorize] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  // signup user
  const signup = async (user) => {
    setErr("");
    const response = await axiosExec.post(`${baseUrl}/signup`, user);
    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const token = data[0].accessToken;
      setAccessToken(token);
    }
    setErr("");
    setIsLoading(false);
    navigate("/dashboard/profile");
  };
  // login user
  const login = async (user) => {
    setErr("");
    const response = await axiosExec.post(`${baseUrl}/login`, user);
    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const token = data[0].accessToken;
      setAccessToken(token);
    }
    setErr("");
    setIsLoading(false);
    navigate("/dashboard/profile");
  };
  // logout user
  const logout = () => {
    setErr("");
    const response = axiosExec.delete(`${baseUrl}/logout`, accessToken);
    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    setAccessToken("");
    setErr("");
    setIsLoading(false);
    navigate("/");
  };

  useEffect(() => {
    if (accessToken) {
      setIsauthorize(true);
    } else {
      setIsauthorize(false);
    }
  }, [accessToken]);

  return (
    <AuthHandlerContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isauthorize,
        signup,
        login,
        logout,
        err,
      }}
    >
      {children}
    </AuthHandlerContext.Provider>
  );
};

export default AuthHandlerContext;
