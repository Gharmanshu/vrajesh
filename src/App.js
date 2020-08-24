import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Manager from "./Manager";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import AdminDashboard from "./AdminDashboard";
import Employee from "./Employee";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/manager" exact={true} component={Manager} />
          <Route path="/" exact={true} component={Login} />
          <Route path="/clerk" exact={true} component={ItemDetails} />
          <Route path="/admin" exact={true} component={AdminDashboard} />
          <Route path="/employee" exact={true} component={Employee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
