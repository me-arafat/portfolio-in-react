import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="contianer contact" id="contact">
        <h1>Contact Me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/arafat-aslam-951aa924a/"
            target="#"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="mailto:arafataslam.11@gmail.com"
            target="#"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
