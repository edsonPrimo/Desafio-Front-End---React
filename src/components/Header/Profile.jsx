import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/edson-user.jpg';

function Profile() {
  return (
    <div className="header__profile ">
      <Link to="#" className="header__profile__link flex">
        <img src={profilePic} alt="foto de profile" className="header__profile__foto alt" />
        <span className="header__profile__nome">Edson</span>
      </Link>
    </div>
  )
}

export default Profile