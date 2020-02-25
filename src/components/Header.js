import React from "react";
import { NavLink, Redirect } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <NavLink className='nav-link' to={'/'}><h2>Home</h2></NavLink>
        <NavLink activeStyle={{color: 'red'}} className='nav-link' to={'/CharacterList'}><h2>Characters</h2></NavLink>
        <NavLink activeStyle={{color: 'red'}} className='nav-link' to={'/LocationList'}><h2>Locations</h2></NavLink>
      </nav>
    </header>
  );
}
