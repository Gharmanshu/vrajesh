import React, { Component } from "react";
import AppNav from "./AppNav";
import ManagerNav from "./ManagerNav";

class Manager extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <ManagerNav />
      </div>
    );
  }
}

export default Manager;
