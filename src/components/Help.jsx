import React from "react";
import Img1 from "../assets/help/img1.png";
import Img2 from "../assets/help/img2.png";
import Img3 from "../assets/help/img3.png";
import Img4 from "../assets/help/img4.png";

const Help = () => {
  return (
    <div className="help">
      <h1>How Can We Help You</h1>
      <div className="help-content">
        <div className="help-content-options">
          <div className="help-content-options-image">
            <img src={Img1} alt="Img1" />
          </div>
          <h6>Stress-free experience</h6>
          <p>
            Once you book a service, leave it to us to reach you and get the job
            done. We have a responsive and professional approach to customer
            service.
          </p>
        </div>
        <div className="help-content-options">
          <div className="help-content-options-image">
            <img src={Img2} alt="Img2" />
          </div>
          <h6>No more shop visits</h6>
          <p>
            Our knowledgeable mechanics have the right types of equipment to
            solve your problems at your desired location without having to waste
            time at the repair shop.
          </p>
        </div>
        <div className="help-content-options">
          <div className="help-content-options-image">
            <img src={Img3} alt="Img3" />
          </div>
          <h6>No paperwork required</h6>
          <p>
            You can see the order status update once you place an order.
            Customers can see the order transitioning from one Order Status to
            another.
          </p>
        </div>
        <div className="help-content-options">
          <div className="help-content-options-image">
            <img src={Img4} alt="Img4" />
          </div>
          <h6>No customer complaints</h6>
          <p>
            Mechanics take time to listen and understand the problem. Our
            mechanics are available for the customers who need reliability to
            get things done and mechanics are accountable to us and to you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
