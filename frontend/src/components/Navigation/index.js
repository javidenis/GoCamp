import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav-bar'>
        <NavLink className='spreader' to="/login">Log In</NavLink>
        <NavLink className='spreader' to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <ul>
      <li className='li-link'>
        <NavLink className='home-link spreader' exact to="/">Home</NavLink>
        <NavLink className='spreader' to='/new'>Create an Event</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;