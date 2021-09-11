import React from "react";
import googleImg from "../assets/footer/google_play.png";
import appImg from "../assets/footer/app_store.png";

const Footer = () => {
  return (
    <footer>
      <div className="heading">
        <h1>Head Office</h1>
        <p>MECHANICAA.COM</p>
        <p>Bengaluru, Karnataka - 560035 office@mechanicaa.in</p>
        <p>+91-8696922404</p>
      </div>
      <div className="heading">
        <h1>Our Locations</h1>
        <p>India</p>
        <p>About Mechanicaa</p>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
      <div className="heading">
        <h1>About Mechanicaa</h1>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
      <div className="heading">
        <h1>Download App</h1>
        <img src={googleImg} alt="Google Play" />
        <img src={appImg} alt="App Store" />
      </div>
    </footer>
  );
};

export default Footer;
