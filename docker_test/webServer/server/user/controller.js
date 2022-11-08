import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { LOGIN_API } from "./constants";

export async function checkAuth(req, res, next) {
  res.json({
    status: StatusCodes.OK,
  });
}

export async function login(req, res, next) {
  try {
    const response = await axios.post(LOGIN_API, {
      data: req.body.data,
    });
  } catch (err) {
    console.log(err.response.data);
  }

  res.json({
    status: StatusCodes.OK,
  });
}

export async function register(req, res, next) {
  res.json({
    status: StatusCodes.OK,
  });
}
