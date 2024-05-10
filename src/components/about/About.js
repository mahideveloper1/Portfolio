import React from "react";
import "./about.css";
import Profile1 from "../../assest/profile.jpg";

// import ME from '../../assest/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile1} alt="abcd" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Role</h5>
              <small>Full-Stack Web Developer</small>
            </article>

            <article className="about__card">
              <TbFolders className="about__icon" />
              <h5>Projects</h5>
              <small>completed 10+ Projects</small>
            </article>
          </div>
          <p>
            I am a undergraduate student who has a good grip on Frontend
            technologies(like HTML, CSS, Reactjs, Nextjs) and Backened
            technologies(like nodejs, expressjs, MONGODB,API development). In am
            a constant learner and always keep learning about various tech
            fields.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
