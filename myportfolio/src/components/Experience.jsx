import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div>
      <div className="container exp" id="experience">
        <h1>Experience</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="exp-items text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imgSrc}`} alt="Seebiz Pvt Ltd." />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h2>{data.organisation}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[1]}</h5>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[2]}</h5>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[3]}</h5>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[4]}</h5>
                  <h5 style={{ color: "powderblue" }}>{data.experiences[5]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
