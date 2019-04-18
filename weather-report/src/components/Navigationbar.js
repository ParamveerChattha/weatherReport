import React from 'react';
import './Navigationbar.css';

const navigationbar = props => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div> </div>
      <div className="navbar_logo"> <a href = "/"> LOGO </a></div>
      <div className="spacer"/>
      <div className="navbar_items">
        <ul>
          <li> <a href="/"> ABOUT US </a></li>
          <li> <a href="/"> CONTACT US </a></li>
          <li> <a href="/"> DOWNLOAD</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navigationbar;
