import axios from "axios";

const axiosExec = {
  post: async (url, data, jwt = "") => {
    let option = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    if (jwt !== "") {
      option = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      };
    }
    const response = await axios.post(url, data, option);

    return response.data;
  },

  get: async (url, jwt = "") => {
    let option = {
      withCredentials: true,
    };
    if (jwt !== "") {
      option = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      };
    }
    const response = await axios.get(url, option);

    return response.data;
  },

  put: async (url, data, jwt = "") => {
    let option = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    if (jwt !== "") {
      option = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      };
    }

    const response = await axios.put(url, data, option);

    return response.data;
  },

  delete: async (url, jwt = "") => {
    let option = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    if (jwt !== "") {
      option = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      };
    }
    const response = await axios.delete(url, option);

    return response.data;
  },
};

export default axiosExec;
