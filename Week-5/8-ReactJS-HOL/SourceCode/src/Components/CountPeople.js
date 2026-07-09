import React, { Component } from 'react';

class CountPeople extends Component {

  constructor(props) {
    super(props);

    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div className="container">

        <button className="login" onClick={this.updateEntry}>
          Login
        </button>

        <span className="text">
          {this.state.entrycount} People Entered!!!
        </span>

        <br /><br />

        <button className="exit" onClick={this.updateExit}>
          Exit
        </button>

        <span className="text">
          {this.state.exitcount} People Left!!!
        </span>

      </div>
    );
  }
}

export default CountPeople;