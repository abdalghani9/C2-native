import React from "react";
import TextField from "../components/TextField";
import "../styles/Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <form action="http://localhost:3002/file.php">
        <TextField type="text" hint="Name" />
        <TextField type="tel" hint="Phone Number" />
        <TextField type="email" hint="E-mail" />
        <TextField
          type="textarea"
          wrap="hard"
          maxlength="500"
          hint="Message . . ."
        />
        <TextField type="submit" />
      </form>
    </div>
  );
}

export default Contact;
