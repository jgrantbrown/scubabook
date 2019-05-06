import React from 'react';
import './Profile.css';

class Profile extends React.Component  {

 render(){
   let diver = this.props.location.diver.diver;
  return (
    <div className="profileSection">
        <p> Diver Details</p>
        <p>{diver.firstName} {diver.lastName}</p>
        <p> List of Dives(editable on each if user)</p>
        <button>Edit Profile</button>
        <button>Add Dives</button>
    </div>
  )};
}

export default Profile;
