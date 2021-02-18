import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import UpdateProfile from "./components/UpdateProfile";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginMethod from "./components/LoginMethod";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LoginMethod}></Route>
          <PrivateRoute exact path="/dashboard" component={Home}></PrivateRoute>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute
            path="/update-profile"
            component={UpdateProfile}
          ></PrivateRoute>
          <Route path="/reset-password" component={ResetPassword}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
