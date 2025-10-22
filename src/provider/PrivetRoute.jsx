import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import Loder from "../components/Loder";
import { Navigate, useLocation, useNavigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const naviget = useNavigate();
  const locations = useLocation();
  console.log(locations);
  const { user, loding } = useContext(AuthContext);

  if (loding) {
    return <Loder></Loder>;
  }

  if (user) {
    return children;
  } else if (!user) {
    return <Navigate state={locations.pathname} to="/auth/login"></Navigate>
  }
};

export default PrivetRoute;
