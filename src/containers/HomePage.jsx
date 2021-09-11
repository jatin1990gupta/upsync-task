import React from "react";
import About from "../components/About";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Help from "../components/Help";
import Partner from "../components/Partner";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Help />
      <About />
      <Booking />
      <Partner />
      <Footer />
    </div>
  );
};

export default HomePage;
