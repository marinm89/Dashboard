import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header({ light, changeTheme }) {
  return (
    <div className="header">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers:23,004</p>
      <button onClick={changeTheme} className='theme-switcher'>
            <FontAwesomeIcon icon={light ? faSun : faMoon}/>
          {light ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
