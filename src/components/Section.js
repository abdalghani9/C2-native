import React from "react";
import Seprator from "./Seprator";
import "../styles/Section.scss";
import Signs from "./Signs";
import {OutlinedButton} from "./Buttons";
function Section() {
  return (
    <div className="section">
      <div className="section-center">
        <h3>Createive Template</h3>
        <div className="two-texts">
          <h1>WELCOME</h1>
          <h1>TO MOGO</h1>
        </div>
        <Seprator color="white-sep" />
        <OutlinedButton value="LEARN MORE"/>
      </div>
      <SectionFooter />
    </div>
  );
}

const SectionFooter = () => {
  return (
    <div className="section-footer">
      <Slider number="01" name="INTRO" value="value" />
      <Slider number="02" name="WORK" />
      <Slider number="03" name="ABOUT" />
      <Slider number="04" name="CONTACT" />
    </div>
  );
};

const Slider = (props) => {
  return (
    <div className="slider-container">
      <div className="max">
        <div className={props.value}></div>
      </div>
      <Signs {...props} />
    </div>
  );
};

export default Section;
