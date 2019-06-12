import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './home/Home.js';
import Header from './header/Header.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;