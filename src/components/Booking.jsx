import React from "react";
import Img1 from "../assets/booking/img1.png";
import Img2 from "../assets/booking/img2.png";
import Img3 from "../assets/booking/img3.png";

const Booking = () => {
  return (
    <div className="booking">
      <h1>Booking with mechanicaa is super easy:</h1>

      <div className="booking-content">
        <div className="booking-content-options">
          <div className="booking-content-options-image">
            <img src={Img1} alt="Img1" />
          </div>
          <p>Book a Service</p>
        </div>
        <div className="booking-content-options">
          <div className="booking-content-options-image">
            <img src={Img2} alt="Img2" />
          </div>
          <p>We will come to you</p>
        </div>
        <div className="booking-content-options">
          <div className="booking-content-options-image">
            <img src={Img3} alt="Img3" />
          </div>
          <p>Ready to go</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
