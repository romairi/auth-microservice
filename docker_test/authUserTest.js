const axios = require("axios");

/**
 * integration test for running
 * node <name file> -registration
 * node <name file> -login
 * node <name file> -authentication
 * @param {*} flag
 */
async function main(flag) {
  const username = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substring(0, 8);

  if (flag == "registration") {
    const response = await axios.post("http://localhost:8000/registration", {
      username,
      email: `${username}@gmail.com`,
      password: "test12345",
      firstName: username,
      lastName: "queen",
      phoneNumber: "0547897894",
    });

    console.log(response);
  } else if (flag == "login") {
    await axios.post("http://localhost:8000/registration", {
      username,
      email: `${username}@gmail.com`,
      password: "test12345",
      firstName: username,
      lastName: "queen",
      phoneNumber: "0547897894",
    });

    const response = await axios.post("http://localhost:8000/login", {
      email: `${username}@gmail.com`,
      password: "test12345",
    });

    console.log(response);
  } else if (flag == "authentication") {
    const registrationResponse = await axios.post(
      "http://localhost:8000/registration",
      {
        username,
        email: `${username}@gmail.com`,
        password: "test12345",
        firstName: username,
        lastName: "queen",
        phoneNumber: "0547897894",
      }
    );

    const token = registrationResponse?.data?.token;
    const response = await axios.get("http://localhost:8000/authentication", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
  }
}

const [a, b, flag] = process.argv;

main(flag.substring(1)).catch(console.error);
