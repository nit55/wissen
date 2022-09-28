import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../Containers/Login";
import Dashboard from "../Containers/Dashboard";
import PrivateRoute from "./privateRoute";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
