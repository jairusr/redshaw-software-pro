import React from 'react';
import './App.css';
import logo from './main_banner.png';
import MainContentTabs from './Components/MainContentTabs.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className='main-content'>
          <MainContentTabs/>
        </div>          
      </body>
      <footer>Test</footer>
    </div>
  );
}

export default App;