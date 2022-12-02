import React from "react";
import Seprator from "./Seprator";
import Signs from "./Signs";
import "../styles/About.scss";
import "../assets/pc.png";
import { Group } from "@material-ui/icons";
 
function About() {
  return (
    <div id="about" className="about">
      <WeDo />
      <AboutImages />
      <Statistics />
    </div>
  );
}

const WeDo = () => {
  return (
    <div className="we-do">
      <h3>What we do</h3>
      <h1>STORY ABOUT US</h1>
      <Seprator color="red-sep" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

const AboutImages = () => {
  return (
    <div className="about-images">
      <div className="image-container">
        <div className="first">
          <Group />
          <h3>SUPER TEAM</h3>
        </div>
      </div>
      <div className="image-container">
        <img src={require("../assets/headphones.png")} alt="headpones" />
      </div>
      <div className="image-container">
        <img src={require("../assets/planetontable.png")} alt="planet" />
      </div>
    </div>
  );
};

const Statistics = (props) => {
  return (
    <div className="stat-container">
      <div className="statistics">
        <Signs number="42" name="WEB DESIGN PROJECTS" />
        <Signs number="123" name="HAPPY CLIENT" />
        <Signs number="15" name="AWARD WINNER" />
        <Signs number="99" name="CUP OF COFFE" />
        <Signs number="24" name="MEMBERS" />
      </div>
    </div>
  );
};



export default About;
