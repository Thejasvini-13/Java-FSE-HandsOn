import React, { Component } from "react";
import "./App.css";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {

    if (this.state.isLoggedIn) {
      return (
        <div className="container">
          <UserPage />
          <LogoutButton onClick={this.handleLogout} />
        </div>
      );
    }

    return (
      <div className="container">
        <GuestPage />
        <LoginButton onClick={this.handleLogin} />
      </div>
    );
  }
}

export default App;