import React from "react";
import "../styles/Title.scss";

function Title(props) {
  return (
    <div className="title">
      <h1 className={`${props.size} ${props.color} `}>{props.text}</h1>
    </div>
  );
}

export default Title;
