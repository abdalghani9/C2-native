import React from "react";
import "../styles/TextField.scss";

function TextField(props) {
  if (props.type !== "textarea") {
    return (
      <div className="text-field">
        <input {...props} type={props.type} placeholder={props.hint} required />
      </div>
    );
  } else {
    return (
      <div className="text-field">
        <textarea
          {...props}
          type={props.type}
          placeholder={props.hint}
          required
        ></textarea>
      </div>
    );
  }
}

export default TextField;
