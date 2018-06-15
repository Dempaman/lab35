import React, { Component } from 'react';
import './App.css';
import Counter from './counter.js'
import TextReverese from './text.js'
import EditList from './editList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <TextReverese />
        <EditList />
      </div>
    );
  }
}

export default App;
