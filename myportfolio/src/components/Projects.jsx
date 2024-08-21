import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>Projects</h1>
        <div className="row">
          {project.map((data) => (
            <>
              <div key={data.id} className="my-4 col-md-4 col-lg-4">
                <div
                  className="card bg-dark text-light "
                  style={{
                    width: "23rem",
                    // border: "2px solid rgb(131,179,209)",
                    boxShadow: "5px 5px 10px 10px rgba(131, 179, 209, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img">
                    <img
                      src={`/assets/${data.imgSrc}`}
                      className="card-img-top"
                      alt="No image found"
                      style={{
                        height: "15.5rem",
                        // border: "5px solid rgb(131,179,209)",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text ">{data.decsription}</p>
                    {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
