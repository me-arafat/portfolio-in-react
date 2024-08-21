import React, { useEffect, useRef } from "react";
import Pdf from "../pdf/Arafat's Web Dev Revised Resume.pdf";
import Me from "./data/me.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Hi, Welcome to my Portfolio",
        "I am Arafat Aslam",
        "Software Engineer",
        "and a MERN stack developer",
      ],
      typespeed: 48,
      backSpeed: 48,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={Pdf}
            download="Arafat's Web Dev Revised Resume"
            className="btn btn-outline-info my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/assets/${Me.imgSrc}`} alt="No image found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
