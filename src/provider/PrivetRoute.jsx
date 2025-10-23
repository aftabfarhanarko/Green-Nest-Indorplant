import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import Loder from "../components/Loder";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const locations = useLocation();
  console.log(locations);
  const { user, loding } = useContext(AuthContext);

  if (loding) {
    return <Loder></Loder>;
  } else if (user) {
    return children;
  } else{
     return <Navigate state={locations.pathname} to="/auth/login"></Navigate>;
  }
  
};

export default PrivetRoute;
