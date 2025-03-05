import React from "react";
import { FaInstagram , FaLinkedin , FaGithub , FaFacebook ,FaCartArrowDown  } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">
          <i className="cart-icon"><FaCartArrowDown/></i> Shoes Store
        </h2>
        <p className="footer-text">
          © 2025 NeoLaunch. All Rights Reserved. Built with
          <span className="react"> React</span> and
          <span className="tailwind"> CSS</span>.
        </p>
        <div className="social-icons">
          <a href="#" className="icon"><FaInstagram/></a>
          <a href="#" className="icon"><FaLinkedin/></a>
          <a href="#" className="icon"><FaGithub/></a>
          <a href="#" className="icon"><FaFacebook/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
