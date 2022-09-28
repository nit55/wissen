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
      <form
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <img
          src="https://doc-14-68-docs.googleusercontent.com/docs/securesc/2nqmu3inqdv97vge0u36r1geolltv6uh/rlv8binc9srni8t9eqokavv1nsr3u9b9/1664389650000/12258978775788100312/14668540604351349632/1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH?e=view&ax=ALW9-sARatBr8no0WcqiIxdwI3XT5GpSryg7m5VBiksfxCckiCyYK75PMEBIWQhmk29Xm-GP1tX2ZWHxySNRUkpCI1wwtShhEZHXV4Xzj0eJ-yGEY3B-iUlbdgElTz7EOTOoqHO5orU_p9e-fKQrsshlSNWWjRnkkV9tAQ-04LBmKXD_fapGB4UsoKE1nBzGeQXnriAGaRbJmnuybQgfNOpoD1S-hGPDjIqwRQsmpOibwZfUdQbuO7HNHzJn7V-E2HWFnpWFw7GfRANgUb6yErNvRkS6eLQ9kWThDXFERDkJX4xjtr8rJKy06Ye7bxvrPpDiJ7i7PRwhKLuHkWF53gYnMoH8Cx_Lrwx8K_gfhuN67Ht_BGhqj1PQdxQkmBrC4OuTThLALlFq8qI8l9xBG0cYR3MGqR2gp2SiXaETCtQBksOzJUYPNs2t1aPxEKZovzKxFpBpkLiVtcoeJdyl-V8wyh4HyE4wgD4CuQBs1pK2DDJWQAjKxZp81FhPxdehreX8OD5YE55dBFaMKu3D6V6zlHofrgySOAMe7AaHAvIdLYeJhIgdYwE2RkaDRugm9cMOgzxiVlksnfQF6DHX9VN3Ixh4Axe8ZXr_6ZGPy-MhfRAqkSxcRbHWXXRZc1Sq-OhaHpzTmD86SY-EeYNGSRatxyCdgktHxSYscpj9k8wQhC9QUEhqhEUu3pDf-B6S4VPLN8hvt7b7WUnJBmWgbwaqvb5YcTBv6XLS19xqhDgx7XGr_AfTvQ&uuid=9106d556-8ec0-4504-be7a-01707722889b&authuser=0&nonce=nflbi7r26qm5i&user=14668540604351349632&hash=u03k6c4ec45dq554a12q5ck00fvsjqn3"
          alt="logo"
        />
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
