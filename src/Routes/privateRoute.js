import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const accessToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        accessToken && accessToken !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default PrivateRoute;
