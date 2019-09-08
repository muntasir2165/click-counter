import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showErrorMessage: false
    };
  }

  increment = () => {
    if (this.state.showErrorMessage) {
      this.setState({ showErrorMessage: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({ showErrorMessage: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.showErrorMessage && (
          <div data-test="error-message" className="error">
            The counter cannot go below 0
          </div>
        )}
        <button data-test="increment-button" onClick={() => this.increment()}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={() => this.decrement()}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
