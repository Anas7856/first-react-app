import React from "react";
import "./hero.css";
import banner from "../imgs/hero-image.d450d3c1.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hello!!!
          <br />
          We Are Creative Digital Agency.
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button>Send Message</button>
      </div>
      <div className="hero-picture">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Hero;
