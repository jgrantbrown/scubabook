import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profileSection">
        <p> Diver Details</p>
        <p> Name etc </p>
        <p> List of Dives(editable on each if user)</p>
        <button>Edit Profile</button>
        <button>Add Dives</button>
    </div>
  );
}

export default Profile;
