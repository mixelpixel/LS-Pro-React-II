import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Clock />
      </div>
    );
  }
}

export default App;
