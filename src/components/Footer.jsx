import React from "react";
import footerpck from "../imgs/f2.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <img src={footerpck} alt="" />
        <p>© 2020 - Mint,All Right Reserved</p>
      </div>
      <div className="footer2">
        <p>BACK TO TOP </p>
      </div>
    </div>
  );
};
export default Footer;
