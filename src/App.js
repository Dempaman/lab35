import React, { Component } from 'react';
import './App.css';
import Counter from './counter.js'
import TextReverese from './text.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <TextReverese />
      </div>
    );
  }
}

export default App;
