import React from "react";
import "./Work.css";

const workData = [
  {
    role: "React Developer",
    company: "Harman International",
    duration: "July 2023 - September 2023",
    description:
      "Worked on developing and maintaining web applications using React.js. Improved UI/UX designs to enhance user experience and collaborated closely with the backend team to integrate APIs seamlessly.",
  },
  {
    role: "DevOps Engineer",
    company: " As a Freelancer",
    duration: "July 2024 - Present",
    description:
      "Assisted in setting up CI/CD pipelines using Gitlab, managed Docker containers, and deployed applications on AWS. Worked on infrastructure automation using Terraform.",
  },
];

const Work = () => {
  return (
    <section id="work">
      <h5>Where I've Worked</h5>
      <h2>Work Experience</h2>
      <div className="container work__container">
        {workData.map((work, index) => (
          <article key={index} className="work__item">
            <h3>{work.role}</h3>
            <h4>{work.company}</h4>
            <p className="work__duration">{work.duration}</p>
            <p className="description">{work.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
