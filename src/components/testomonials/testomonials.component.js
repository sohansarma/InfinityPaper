import React from "react";
import Testomonials from "./testomonials_json";
import { Carousel } from "antd";
import "./testomonials.style.css";

const TestomonialsPage = () => {
  return (
    <div>
      <div className="testomonials">Testomonials</div>

      <div style={{ display: "flex" }} className="row">
        {Testomonials.map(data => {
          return (
            <div className="col-sm-3 testomonials_card_container">
              <div style={{ color: "#000" }} className="testomonials_message">
                "{data.message}"
              </div>
              <div style={{ marginTop: "10px" }}>
                <div style={{ color: "#000" }} className="testomonials_user">
                  {data.user}
                </div>
                <div style={{ color: "#000" }} className="testomonials_user">
                  {data.company}
                </div>
                <div style={{ color: "#000" }} className="testomonials_user">
                  {data.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestomonialsPage;
