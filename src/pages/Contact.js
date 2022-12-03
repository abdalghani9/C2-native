import React, { useState } from "react";
import Title from "../components/Title";
import TextField from "../components/TextField";
import Axios from "axios";

import "../styles/Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    Axios.post("http://localhost:3000/contact/send", {
      uname: name,
      email: email,
      message: message,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="contact">
      <Title size="big" color="white" text="Contact" />
      <form onSubmit={send}>
        <TextField
          label="Your name"
          type="text"
          hint="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Your E-mail"
          type="email"
          hint="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Message"
          type="textarea"
          wrap="hard"
          maxLength="500"
          hint="Message . . ."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <TextField type="submit" />
      </form>
    </div>
  );
}

export default Contact;
