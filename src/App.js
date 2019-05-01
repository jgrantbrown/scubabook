import React from 'react';
import Profile from './components/Profile/Profile'
import './App.css';

function App() {
  return (
    <div className="homeScreen">
      Scuba Dive Log Book
      <p> About link or small summary of app </p>
      <p> Add Login/ SignUP button</p>

      <p> If logged in show Welcome/profile page</p>
      <Profile/>
    </div>
  );
}

export default App;
