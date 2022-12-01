import React from "react";
import Header from "./Header";
import "../styles/Section.scss";
function Section() {
  return (
    <div className="section-div">
      <Header />
      <div className="section-center">
        <h3>Createive Template</h3>
        <div className="two-texts">
          <h1>WELCOME</h1>
          <h1>TO MOGO</h1>
        </div>
        <div className="seprator"></div>
        <div className="more-btn">LEARN MORE</div>
      </div>
      <div className="section-footer">
        <Slider number="01" name="INTRO" value="value" />
        <Slider number="02" name="WORK" />
        <Slider number="03" name="ABOUT" />
        <Slider number="04" name="CONTACT" />
      </div>
    </div>
  );
}

let Slider = (props) => {
  return (
    <div className="slider-container">
      <div className="max">
        <div className={props.value}></div>
      </div>
      <div className="description">
          <span className="number">{props.number} </span>
        <span className="name"> {props.name} </span>
      </div>
    </div>
  );
};

export default Section;
