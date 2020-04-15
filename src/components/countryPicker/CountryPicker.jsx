import React from "react";

const CountryPicker = (props) => {
  const handleCountry = (event) => {
    props.handleCountry(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <select
          className="custom-select custom-select-lg mb-3"
          onChange={handleCountry}
        >
          <option>World</option>
          {props.countries.map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default CountryPicker;
