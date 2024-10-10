import React, { useState } from "react";
import abtpick from "../imgs/bg.b74b9f78.png";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const printdata = () => {
    console.log("Name:" + name);
    console.log("Email:" + email);
    console.log("Message:" + message);
  };

  return (
    <section className="contact">
      <h1>Contact US.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt <br /> ut labore et dolore magna aliqua.
      </p>
      <div className="contact-main">
        <div className="contact-content">
          <h2>Send Us Message.</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <textarea
            name=""
            id=""
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={printdata}>Send Message</button>
        </div>
        <div className="contact-picture">
          <img src={abtpick} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
