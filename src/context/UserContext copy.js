import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthHandlerContext from "../context/AuthHandlerContext";
import axiosExec from "../utility/axiosProcess";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [summary, setSummary] = useState({});
  const [skills, setSkills] = useState([]);
  const [showcases, setShowcases] = useState([]);
  const [education, seteducation] = useState([]);
  const [experiences, setexperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  const { accessToken, isauthorize, setAccessToken } =
    useContext(AuthHandlerContext);

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const getUser = async () => {
    setErr("");
    const response = await axiosExec.get(
      `${baseUrl}/api/users/profile`,
      accessToken
    );

    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const user = data[0];
      console.log(user);
      setUser({ ...user, user });
    }
    setErr("");
    setIsLoading(false);
  };

  const getSummary = async () => {
    setErr("");
    const response = await axiosExec.get(
      `${baseUrl}/api/users/summary`,
      accessToken
    );

    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const summary = data[0];
      setSummary({ ...summary, summary });
    }
    setErr("");
    setIsLoading(false);
  };

  const getSkills = async () => {
    setErr("");
    const response = await axiosExec.get(
      `${baseUrl}/api/users/skills`,
      accessToken
    );

    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const skills = data[0];
      console.log(skills);
      setSkills(skills);
    }
    setErr("");
    setIsLoading(false);
  };

  const updateUser = async (updateData) => {
    setErr("");
    const response = await axiosExec.put(
      `${baseUrl}/api/users/profile`,
      updateData,
      accessToken
    );

    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const user = data[0];
      console.log(user);
      setUser({ ...user, user });
    }
    setErr("");
    setIsLoading(false);
  };

  const updateSummary = async (updateData) => {
    setErr("");
    const response = await axiosExec.put(
      `${baseUrl}/api/users/summary`,
      updateData,
      accessToken
    );

    const { process = "", data = [] } = response || {};
    if (process === "failed") {
      setErr(response.message);
      return;
    }

    if (data) {
      const summary = data[0];
      // setUserDetails({ ...summary, summary });
    }
    setErr("");
    setIsLoading(false);
  };

  // const updateSkill = async () => {
  //   console.log("update skill");
  // };

  // const getShowcases = async () => {
  //   console.log("showcases");
  // };

  // const updateShowcase = async () => {
  //   console.log("update showcase");
  // };

  // const getEducation = async () => {
  //   console.log("education");
  // };

  // const updateEducation = async () => {
  //   console.log("update education");
  // };

  // const getExperiences = async () => {
  //   console.log("experiences");
  // };

  // const updateExperience = async () => {
  //   console.log("update experiences");
  // };

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        summary,
        getSummary,
        skills,
        getSkills,
        updateSummary,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
