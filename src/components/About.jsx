import React from "react";
import "./about.css";
import person1 from "../imgs//person01.09d2aa97.png";
import person2 from "../imgs/person02.5ca453ab.png";
const About = () => {
  return (
    <section className="about">
      <h1>ABOUT US.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt <br /> ut labore et dolore magna aliqua.
      </p>
      <div className="about-main">
        <div className="about-cards">
          <img src={person1} alt="" />
          <div className="about-overlay">
            <h3>Luke Skywalker</h3>
            <h6>Web designer</h6>
          </div>
        </div>
        <div className="about-cards">
          <img src={person2} alt="" />
          <div className="about-overlay">
            <h3>Han Solo</h3>
            <h6>Graphic Designer</h6>
          </div>
        </div>
        <div className="about-content">
          <h4>Little About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp orincididunt ut labore et dolore magna aliqua.
          </p>
          <h6>Read More</h6>
        </div>
      </div>
    </section>
  );
};
export default About;
