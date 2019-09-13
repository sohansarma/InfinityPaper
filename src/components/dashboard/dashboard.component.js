import React, { Component } from "react";
import { Carousel } from "antd";
import Testomonials from "../testomonials/testomonials.component";
import "./dashboard.style.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Carousel style={{marginTop:'54px'}}>
          <div>
            <div className="container col-sm-6">
              <div className="content_header">
                Tear and Water Resistant Paper Bags
              </div>
              <div>
                Bags that are high weight tolerant and are reliable, thanks to
                the unique materials used. Infibags have been opted by many
                customers with successful results. Let’s find out more in the
                video :
              </div>
            </div>
            <div className="container col-sm-6">
              <iframe
                width="100%"
                height="75%"
                src="https://www.youtube.com/embed/Bey4XXJAqS8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div>
            <div className="container col-sm-6">
              <div className="content_header">
                Tear Resistant Water Resistant Paper
              </div>
              <div>
                Introducing InfiDura which is known for its Tear proof, Water
                Resistant and Low Ink Consumption features. Besides which
                InfiDura can last for over 100 years and has an exceptional
                shade permanence. Let’s find out more in the video :
              </div>
            </div>
            <div className="container col-sm-6">
              <iframe
                width="100%"
                height="75%"
                src="https://www.youtube.com/embed/vKySOF6D-JY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div>
            <div className="container col-sm-6">
              <div className="content_header">Self Adhesive Papers</div>
              <div>
                InfiLabel - Self Adhesive Papers serve a very important and
                specific purpose of labeling in sectors such as FMCG,
                Automotive, Supply Chain Management, to name a few and therefore
                our range is designed with excellent adhesive tack, high-speed
                die-cutting and sharp printing results. Let’s find out more in
                the video :
              </div>
            </div>
            <div className="container col-sm-6">
              <iframe
                width="100%"
                height="75%"
                src="https://www.youtube.com/embed/1La4QzGeaaQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div>
            <div className="container col-sm-6">
              <div className="content_header">
                Tear and Water Resistant Envelopes
              </div>
              <div>
                Safe and sturdy envelopes are the preference when couriering
                important documents and articles. Infilope offers tear and water
                proof protection for your items ensuring your parcel reaches the
                recipient in pristine condition . Let’s find out more in the
                video :
              </div>
            </div>
            <div className="container col-sm-6">
              <iframe
                width="100%"
                height="75%"
                src="https://www.youtube.com/embed/1La4QzGeaaQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </Carousel>
        {/* <Testomonials /> */}
      </div>
    );
  }
}

export default Dashboard;
