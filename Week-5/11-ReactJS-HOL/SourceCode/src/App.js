import React, { Component } from "react";
import "./App.css";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: ""
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const euro = (this.state.rupees / 90).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div className="box">
        <h2>Currency Convertor</h2>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.handleSubmit}>Convert</button>

        <h3>Euro : € {this.state.euro}</h3>
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  syntheticEvent = () => {
    alert("I was clicked");
  };

  render() {

    return (
      <div className="container">

        <h1>React Event Examples</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increase}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.syntheticEvent}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;