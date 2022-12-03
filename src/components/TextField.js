import React from "react";
import "../styles/TextField.scss";

function TextField(props) {
  return (
    <div className="text-field-container">
      <label className={props.color}>{props.label}</label>
      <div className="text-field">
        {props.type !== "textarea" ? (
          <input
            type={props.type}
            placeholder={props.hint}
            required
            {...props}
          />
        ) : (
          <textarea
            type={props.type}
            placeholder={props.hint}
            required
            {...props}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default TextField;
