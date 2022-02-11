import { createContext, useState, useEffect, useContext } from "react";
import AuthHandlerContext from "../context/AuthHandlerContext";
import axiosExec from "../utility/axiosProcess";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [summary, setSummary] = useState({});
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [defaultResume, setDefaultResume] = useState([]);

  const { accessToken, setAccessToken } = useContext(AuthHandlerContext);

  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const getUser = async () => {
    setErr("");
    try {
      const response = await axiosExec.get(
        `${baseUrl}/api/users/profile`,
        accessToken
      );

      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        }
      }

      const { data } = response;

      if (data) {
        const user = data[0];
        setUser({ ...user, user });
      }
    } catch (error) {
      console.log(error);
    }

    setErr("");
    setIsLoading(false);
  };

  const getSummary = async () => {
    setErr("");
    try {
      const response = await axiosExec.get(
        `${baseUrl}/api/users/summary`,
        accessToken
      );
      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        }
      }

      const { data } = response;
      console.log(data);

      if (data) {
        const summary = data[0];
        setSummary(summary);
      }
    } catch (error) {
      console.log(error);
    }

    setErr("");
    setIsLoading(false);
  };

  const getSkills = async () => {
    setErr("");
    try {
      const response = await axiosExec.get(
        `${baseUrl}/api/users/skills`,
        accessToken
      );
      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        }
      }

      const { data } = response;

      if (data) {
        const skills = data[0];
        setSkills(skills);
      }
    } catch (error) {
      console.log(error);
    }

    setErr("");
    setIsLoading(false);
  };

  const updateUser = async (updateData) => {
    setErr("");
    try {
      const response = await axiosExec.put(
        `${baseUrl}/api/users/profile`,
        updateData,
        accessToken
      );

      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        }
      }

      const { data } = response;
      if (data) {
        const user = data[0];
        setUser({ ...user, user });
      }
    } catch (error) {
      console.log(error);
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

  const deleteSkill = async (id) => {
    setErr("");
    try {
      const response = await axiosExec.delete(
        `${baseUrl}/api/users/skill/${id}`,
        accessToken
      );

      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        } else if (process === "passed") {
          await getSkills();
        }
      }
    } catch (error) {
      console.log(error);
    }

    setErr("");
    setIsLoading(false);
  };

  const addSkill = async (skill) => {
    setErr("");
    try {
      const response = await axiosExec.post(
        `${baseUrl}/api/users/skill`,
        skill,
        accessToken
      );
      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        } else if (process === "passed") {
          await getSkills();
        }
      }
    } catch (error) {
      console.log(error);
    }

    setErr("");
    setIsLoading(false);
  };

  const getResume = async () => {
    setErr("");
    try {
      const response = await axiosExec.get(
        `${baseUrl}/api/users/resume`,
        accessToken
      );
      console.log(response);
      if ("process" in response) {
        const { process } = response;
        if (process === "failed") {
          console.log("process failed");
          setErr(response.message);
          return;
        }
      }

      const { data } = response;

      if (data) {
        const resume = data[0];
        setDefaultResume(resume);
      }
    } catch (error) {}
  };

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        updateUser,
        summary,
        getSummary,
        skills,
        getSkills,
        deleteSkill,
        addSkill,
        getResume,
        defaultResume,
        err,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
