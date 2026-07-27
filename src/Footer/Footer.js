import React from "react";
import logo from "../images/image 17.svg";
import Vector from "../images/Vector.svg";
import location from "../images/mdi_location.svg";
import inbox from "../images/inbox.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Trio Logo" />
        <h2>Trio</h2>
      </div>

      <hr className="footer-line" />

      <div className="footer-inner">
        <div className="footer-col">
          <h3>Reach Us</h3>

          <div className="contact">
            <img src={Vector} alt="Phone" />
            <span>+2347039362491</span>
          </div>

          <div className="contact">
            <img src={inbox} alt="Email" />
            <span>susanojelaye@gmail.com</span>
          </div>

          <div className="contact">
            <img src={location} alt="Location" />
            <span>
              Ajegunle, Bode Olude,
              <br />
              Abeokuta, Ogun State,
              <br />
              Nigeria
            </span>
          </div>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blogs</a>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms &amp; Service</a>
          <a href="/">Terms of Use</a>
          <a href="/">Refund Policy</a>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>

          <a href="/">Downloads</a>
          <a href="/">Forum</a>
        </div>

      </div>

    </footer>
  );
}
