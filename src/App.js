import React from 'react';
import './App.css';
import logo from './main_banner.png';
import BottomDrawer from './components/BottomDrawer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className='main-content'>
          About       Contact
        </div>          
        <BottomDrawer/>        
      </body>
    </div>
  );
}

export default App;