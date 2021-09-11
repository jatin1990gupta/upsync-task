import React from "react";
import HeaderImg from "../assets/HeaderImage.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Our Services</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <div className="content">
        <Navbar />
        <div className="content-headings">
          <h2>Looking For</h2>
          <h1>Professional Repair Services</h1>
          <h2>That Comes Straight To Your Place?</h2>
        </div>
        <div className="content-sel">
          <select name="service" id="service">
            <option>Select your Service</option>
          </select>
          <select name="location" id="location">
            <option>Select your Service</option>
          </select>
        </div>
        <button>BOOK NOW</button>
      </div>
      <img src={HeaderImg} alt="Header" />
    </header>
  );
};

export default Header;
