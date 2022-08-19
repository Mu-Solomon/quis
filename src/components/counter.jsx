import React, { Component } from "react";
import "../index.css";
class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 16,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span
          style={this.styles}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          {this.formatCount()}
        </span>
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <h1 className="text-3xl font-bold underline">Testing Tailwindcss</h1>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
