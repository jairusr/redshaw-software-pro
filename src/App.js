import React from 'react';
import './App.css';
import logo from './Assets/Images/Standard-Logo-300x300.svg';
import MainContentTabs from './Components/MainContentTabs.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
        <div className='main-content'>
          <MainContentTabs/>
        </div>
        <div className='App-footer'>&copy; 2024 Redshaw Software Limited. All rights reserved.</div>          
    </div>
  );
}

export default App;