import React from "react";
import CarServices from "../assets/services/car.png";
import BikeServices from "../assets/services/bike.png";
import CycleServices from "../assets/services/cycle.png";
import SpareParts from "../assets/services/spare.png";
import Training from "../assets/services/training.png";
import SearchMore from "../assets/services/search_more.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-item">
        <img src={CarServices} alt="Car Services" />
        <p>Car Services</p>
      </div>
      <div className="services-item">
        <img src={BikeServices} alt="Bike Services" />
        <p>Bike Services</p>
      </div>
      <div className="services-item">
        <img src={CycleServices} alt="Cycle Services" />
        <p>Cycle Services</p>
      </div>
      <div className="services-item">
        <img src={SpareParts} alt="Spare Parts" />
        <p>Spare Parts</p>
      </div>
      <div className="services-item">
        <img src={Training} alt="Training" />
        <p>Training Services</p>
      </div>
      <div className="services-item">
        <img src={SearchMore} alt="Search More" />
        <p>Search More</p>
      </div>
    </div>
  );
};

export default Services;
