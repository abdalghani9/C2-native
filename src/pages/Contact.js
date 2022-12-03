import React, { useState } from "react";
import Title from "../components/Title";
import TextField from "../components/TextField";
// import Popup from "../components/Popup";
import { Close } from "@material-ui/icons";
import { OutlinedButton } from "../components/Buttons";
import Axios from "axios";
import "../styles/Contact.scss";
import "../styles/Popup.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();
  const [show, setShow] = useState(false);

  const send = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setStatus("Name should be more than 2 charactares");
    } else if (!isNaN(name)) {
      setStatus("Name should be a string");
      console.log(!isNaN(name));
    } else if (message.length < 100) {
      setStatus("The message body should be more than 100 charactares");
    } else if (message.includes("<") ) {
      setStatus("The message body should be valid charactares");
    }  else {
      Axios.post("http://localhost:3001/send", {
        uname: name,
        email,
        message,
      })
        .then(function (response) {
          if (response.status === 200) {
            setShow(true);
            setName("");
            setEmail("");
            setMessage("");
            setStatus();
          }
        })
        .catch(function (err) {
          setStatus("Error Please try again !");
        });
    }
  };

  return (
    <div className="contact">
      {show && (
        <div className="overlay">
          <div className={`popup-container black bg-yellow`}>
            <span
              className="close"
              onClick={() => {
                setShow(false);
              }}
            >
              <Close />
            </span>
            <Title text="Thanks !" color="red" />
            <p className="popup-text">
              Your message has been sent successfully ! we will get back within
              24 hours
            </p>
            <OutlinedButton
              value="OK"
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
        </div>
      )}
      <Title size="big" color="white" text="Contact" />
      <h4 style={{ color: "#e91e63" }}>{status}</h4>
      <form onSubmit={send}>
        <TextField
          label="Your name"
          type="text"
          hint="Name"
          size="20"
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
        <TextField type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default Contact;
