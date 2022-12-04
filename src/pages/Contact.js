import React, { useState } from "react";
import Title from "../components/Title";
import TextField from "../components/TextField";
// import Popup from "../components/Popup";
import { CheckCircle, Close } from "@material-ui/icons";
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

  const specialChars = /[^a-zA-Z0-9. ,]/g;

  const clearFileds = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus();
  };

  const send = (e) => {
    e.preventDefault();

    // form validation
    if (name.length < 3) {
      setStatus("Name should be more than 2 charactares");
    } else if (!isNaN(name)) {
      setStatus("Name should be a string");
    } else if (message.length < 100) {
      setStatus("The message body should be more than 100 charactares");
    } else if (specialChars.test(message)) {
      setStatus(
        "The message body should be a valid charactares. for e.g not contain (/ # $ % & ^ > <)"
      );
      console.log(specialChars.test(message));
    } else {
      Axios.post("http://localhost:3001/send", {
        uname: name,
        email,
        message,
      })
        .then(function (response) {
          if (response.status === 200) {
            clearFileds();
            setShow(true);
          }
        })
        .catch(function (err) {
          setStatus("Error. Please try again !");
        });
    }
  };

  return (
    <div className="contact">
      {/* Show popup window when message send  */}
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
            <Title text="Thanks !" color="red" size="medium" />
            <CheckCircle style={{ color: "#808080", fontSize: "30px" }} />
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

      {/* contact form start  */}
      <Title size="big" color="white" text="Contact" />
      <h4
        style={{ color: "#e91e63", textAlign: "center", padding: "10px 30px" }}
      >
        {status}
      </h4>
      <form onSubmit={send}>
        <TextField
          label="Your name"
          type="text"
          hint="Name"
          maxLength="20"
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
