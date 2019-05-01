import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class MainPage extends React.Component  {

  render(){
    return (
        <div className="mainScreen">
          Scuba Dive Log Book
          <p> About link or small summary of app </p>
          <p> Add Login/ SignUP button</p>
          <p> If logged in show Welcome/profile page</p>

      </div>
  )}
}


export default MainPage;
