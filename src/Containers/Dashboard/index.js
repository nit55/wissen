import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../Login/action";
import { get_color_data } from "./action";
import DataTable from "../../Components/Table";
import { Container, Paper } from "@mui/material";
import Button from "../../Components/Button";

const Dashboard = (props) => {
  const { history, logoutDispatch, getColorDispatch, colorData, user } = props;
  const [headers, setHeaders] = useState([]);
  const logout = () => {
    localStorage.removeItem("token");
    logoutDispatch();
    history.push("/");
  };
  useEffect(() => {
    getColorDispatch();
  }, []);

  useEffect(() => {
    if (colorData.length > 0) {
      //   console.log(Object.keys(colorData[0]));
      setHeaders(Object.keys(colorData[0]));
    }
  }, [colorData]);

  return (
    <div>
      <Paper>
        <div
          style={{
            display: "flex",
            padding: "15px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "30%" }}>
            Welcome {user}
            {console.log(user, "ddd")}
          </div>
          <Button
            click={logout}
            type="submit"
            disabled={false}
            text={"Logout"}
          />
        </div>
      </Paper>
      <br />
      <Container>
        <DataTable colorData={colorData} headers={headers} />
      </Container>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    colorData: state.DashboardReducer.colorData,
    pages: state.DashboardReducer.pages,
    user: state.LoginReducer.userId,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    logoutDispatch: () => {
      dispatch(logout());
    },
    getColorDispatch: () => {
      dispatch(get_color_data());
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard);
