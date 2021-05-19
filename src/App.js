import React, { Component } from 'react';
import "./App.css";
import Control from './control';
class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Control />
        </section>
      </div>
    );
  }
}

export default App;