import React from "react";
import "./Experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Reactjs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Nextjs</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />

              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>HTML&CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Recoil</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />

              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>Expressjs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle classname="experience__details-icon" />
              <div>
                <h4>API's</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
