import React, { useState, useEffect } from "react";
import InputAdornments from "../../Components/Input";
import Button from "../../Components/Button";
import Snackbar from "../../Components/Snackbar";
import { connect } from "react-redux";
import { dispatch_login, reset_login_error } from "./action";

const Login = (props) => {
  const { loggedInUser, login, history, error, resetError } = props;

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [snackbarState, setSnackbarState] = useState(false);

  const handleClickSnackbar = (newState) => () => {
    setSnackbarState(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarState(false);
  };

  const handleChange = (prop) => (event) => {
    console.log(prop, event.target.value);
    setUserDetails({ ...userDetails, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setUserDetails({
      ...userDetails,
      showPassword: !userDetails.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (userDetails.username.length < 3 || userDetails.password.length < 3) {
      alert("invalid login");
    } else {
      console.log(userDetails);
      login(userDetails.username, userDetails.password);
      setUserDetails({
        username: "",
        password: "",
        showPassword: false,
      });
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      history.push("/dashboard");
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (error !== "") {
      setSnackbarState(true);
    }
  }, [error]);

  useEffect(() => {
    if (!snackbarState && error !== "") {
      resetError();
    }
  }, [snackbarState]);

  return (
    <div>
      <form>
        <InputAdornments
          type="username"
          change={handleChange}
          value={userDetails.username}
        />
        <InputAdornments
          type="password"
          change={handleChange}
          value={userDetails.password}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          showPassword={userDetails.showPassword}
        />
        <Button
          click={submitForm}
          type="submit"
          disabled={
            userDetails.username.length > 2 && userDetails.password.length > 2
              ? false
              : true
          }
          text={"Login"}
        />
      </form>
      <Snackbar
        open={snackbarState}
        close={handleCloseSnackbar}
        message={error}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.LoginReducer.loggedIn,
    error: state.LoginReducer.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(dispatch_login(username, password));
    },
    resetError: () => {
      dispatch(reset_login_error());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
