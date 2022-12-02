import React from 'react';
import "../styles/Signs.scss";

function Signs(props) {
  return (
    <div className="signs">
    <span className="number">{props.number} </span>
    <span className="name"> {props.name} </span>
  </div>
  )
}

export default Signs