const users = require("./users");

const headers = {
  "Access-Control-Allow-Origin": "http://localhost:8080",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Allow-Credentials": true
};

const userPaths = users.map(user => ({
  request: {
    path: `/v1/api/users/${user.id}`,
    method: "GET"
  },
  response: {
    headers,
    body: user
  }
}));

// module.exports = [
//   ...userPaths,
//   {
//     request: {
//       path: "/v1/api/users",
//       method: "GET"
//     },
//     response: {
//       headers: headers,
//       body: {
//         page: 1,
//         size: 2,
//         users
//       }
//     }
//   }
// ];

const db = { users };
console.log(JSON.stringify(db));
