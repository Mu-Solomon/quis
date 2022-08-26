import React, { Component } from "react";
import NavBar from "./components/navbar";
import RouterPage from "./components/RouterPage";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <RouterPage />
        <Footer />
      </div>
    );
  }
}

export default App;
