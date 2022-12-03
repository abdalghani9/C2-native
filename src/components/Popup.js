import React from "react";
import "../styles/Popup.scss";
import { OutlinedButton } from "../components/Buttons";
import { Close } from "@material-ui/icons";
import Title from "./Title";

function Popup(props) {
  return (
    <div className={`popup-container ${props.color} bg-${props.bg}`}>
      <span
        className="close"
        onClick={() => {
          console.log('hide');
        }}
      >
        <Close />
      </span>
      <Title text="Thanks !" color="red" />
      <p className="popup-text"> {props.text}</p>
      <OutlinedButton
        value="OK"
        onClick={() => {
          console.log('hide');
        }}
      />
    </div>
  );
}

export default Popup;
