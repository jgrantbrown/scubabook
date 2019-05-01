import React, { Component } from "react";
import Profile from './components/Profile/Profile';
import DiversList from './components/DiversList/DiversList';

import './App.css';
// import axios from 'axios';

class App extends Component  {

  render(){
    return (
        <div className="homeScreen">
          Scuba Dive Log Book
          <p> About link or small summary of app </p>
          <p> Add Login/ SignUP button</p>

          <p> If logged in show Welcome/profile page</p>

          <Profile/>
          <DiversList />
      </div>
  )
}
}


  export default App;
//  USE BELOW FOR SETTING UP LOGIN WITH RAILS BACKEND AND AXIOS
  // constructor(props){
  //     super(props);
  //     this.state = {
  //       currentUser: null
  //     }
  //     // this.updateCurrentUser = this.updateCurrentUser.bind(this);
  //   }
  //
  // componentDidMount(){
  //     let that = this
  //     axios.get('/users/check_for_user',{
  //     })
  //     .then(function(response){
  //       if(response.data.email){
  //         that.setState({
  //           currentUser: response.data.email
  //         })
  //       } else {
  //         that.setState({
  //           currentUser: null
  //         })
  //       }
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     })
  //   }
  // updateCurrentUser(email) {
  //     this.setState({
  //       currentUser: email
  //     })
  //   }
  //
  // render(){
  //     return (
  //       <div>
  //         <Header updateCurrentUser={this.updateCurrentUser}/>
  //       </div>
  //     )
  //   }
