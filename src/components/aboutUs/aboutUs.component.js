import React from "react";
import AboutUsData from "./aboutUs_json";
import './aboutUs.style.css'

const AboutUs = () => {
  console.log(AboutUsData);
  return (
    <div className="about_us_container">
      <div className="about_us">About us</div>
      {AboutUsData.map(data => {
        return (
          <div>
            <div className="about_us_header">{data.header}</div>
            <div className="about_us_subHeader">{data.subHeader}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;
