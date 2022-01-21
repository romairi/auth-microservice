// import axios from "axios";
// import qs from "qs";

// import { getSessionToken } from "./utilities/globalUtils/utils";
// import envDetails from "./env.json";

// const serverUrl = envDetails[process.env.NODE_ENV].serverUrl + "/api";

// const onSuccess = ({ data }, resolve, reject) => {
//   if (data.status !== "success") {
//     return reject(data);
//   }

//   resolve(data);
// };

// const onFailure = (err, reject) => {
//   console.error(err);
//   reject({ description: "Network error" });
// };

// const getOptions = () => ({
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: getSessionToken(),
//   },
// });

// const post = (path, data = {}) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(serverUrl + path, data, getOptions())
//       .then((res) => onSuccess(res, resolve, reject))
//       .catch((err) => onFailure(err, reject));
//   });

// const get = (path, params) =>
//   new Promise((resolve, reject) => {
//     const pathWithParams =
//       serverUrl + path + (params ? `?${qs.stringify(params)}` : "");

//     axios
//       .get(pathWithParams, getOptions())
//       .then((res) => onSuccess(res, resolve, reject))
//       .catch((err) => onFailure(err, reject));
//   });

// const put = (path, data = {}) =>
//   new Promise((resolve, reject) => {
//     axios
//       .put(serverUrl + path, data, getOptions())
//       .then((res) => onSuccess(res, resolve, reject))
//       .catch((err) => onFailure(err, reject));
//   });

// const del = (path, params) =>
//   new Promise((resolve, reject) => {
//     const pathWithParams =
//       serverUrl + path + (params ? `?${qs.stringify(params)}` : "");

//     axios
//       .delete(pathWithParams, getOptions())
//       .then((res) => onSuccess(res, resolve, reject))
//       .catch((err) => onFailure(err, reject));
//   });

// const httpRequest = {
//   post,
//   get,
//   put,
//   del,
// };

// export default httpRequest;
