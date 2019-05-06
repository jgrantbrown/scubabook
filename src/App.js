import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DiversList from './components/DiversList/DiversList';
import DiveSites from './components/DiveSites/DiveSites';
import MainPage from './components/MainPage/MainPage';

import './App.css';



// import axios from 'axios';

class App extends Component  {
  debugger
  render(){
    return (
        <div className="homeScreen">
            <nav className="navContent">
               <NavLink className="Nav_link" to="/">Home</NavLink>
                {/*  <NavLink className="Nav_link" to="/profiles">Profiles</NavLink> */}
               <NavLink className="Nav_link" to="/divers">Divers</NavLink>
               <NavLink className="Nav_link" to="/divesites">Dive Sites</NavLink>
            </nav>

            <div>
            <Switch>
              <Route path="/" exact component={MainPage} />
            {/*  <Route path="/profiles" component={Profile} /> */}
              <Route path="/profiles/:id" exact component={Profile } />
              <Route path="/divers" component={DiversList } />
              <Route path="/divesites" component={DiveSites } />
              </Switch>
            </div>

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
