import React from "react";

const Partner = () => {
  return (
    <div className="partner">
      <h1>
        Are you a <span>Service Expert ?</span>
      </h1>
      <select name="city" id="city">
        <option>SELECT YOUR CITY</option>
      </select>
      <button>REGISTER AS PARTNER</button>
    </div>
  );
};

export default Partner;
