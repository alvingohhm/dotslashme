const axios = require("axios");

(async () => {
  const submitData = JSON.stringify({
    email: "alvgoh@yahoo.com",
    password: "123456",
  });

  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiNTgzMmIxLTA3MjAtNDg3My1hOTUzLWVmY2ZjYzFhYzdmYSIsImlhdCI6MTY0NDQxOTQ5MSwiZXhwIjoxNjQ3MDExNDkxfQ.0e1cQ1rtsGITplzIMdtwFD8NboDI-etLJ3IZbHNNLeU";

  const response = await axios.get("http://localhost:5000/api/users/profile", {
    headers: {
      authorization: "Bearer " + token,
      withCredentials: true,
    },
  });
  console.log(response.data.data);
})();

// const run = async () => {
//   const submitData = JSON.stringify({
//     email: "alvgoh@yahoo.com",
//     password: "123456",
//   });
//   const response = await axios.post(
//     "http://localhost:5000/login",
//     submitData,
//     {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     }
//   );
//   console.log(response.data.data);
// };

// (async () => {
//   const submitData = JSON.stringify({
//     email: "alvgoh@yahoo.com",
//     password: "123456",
//   });
//   const options = {};
//   const response = await axios.get(
//     "http://localhost:5000/api/users/profile",
//     submitData,
//     {
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   console.log(response.data.data);
// })();
