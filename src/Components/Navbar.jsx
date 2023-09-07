import React from 'react'
import hamburger from "../logos/hamburger.svg";
import logo from '../logos/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-design">
        <img src={logo} alt="logo" />
        <img
          src={hamburger}
          alt="hamburger"
          className="hamburger"
        />
      </div>
    </div>
  );
}

export default Navbar