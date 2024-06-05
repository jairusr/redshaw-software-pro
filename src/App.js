import React from 'react';
import './App.css';
import logo from './main_banner.png';
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
        <div className='App-footer'>test</div>          
    </div>
  );
}

export default App;