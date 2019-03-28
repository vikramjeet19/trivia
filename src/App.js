import React, { Component } from 'react';
import MainComponent from './Components/MainComponent/MainComponent';
import Header from './Components/Header/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToastContainer />
      <Header/>
        <MainComponent/>
      </div>
    );
  }
}

export default App;
