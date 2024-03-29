import { Route, Routes } from "react-router-dom";
import { BASE_ROUTE, DASHBOARD_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./constants";
import Login from "../containers/Login/index";
import Registration from "../containers/Registration";
import Dashboard from "../containers/Dashboard";

const routes = (
  <Routes>
    <Route path={BASE_ROUTE} element={<Registration />} />
    <Route path={LOGIN_ROUTE} element={<Login />} />
    <Route path={SIGNUP_ROUTE} element={<Registration />} />
    <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
  </Routes>
);

export default routes;
