import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assest/portfolio1.jpg";
import IMG2 from "../../assest/portfolio2.jpg";
import IMG3 from "../../assest/portfolio3.jpg";
import IMG4 from "../../assest/portfolio4.jpg";
import IMG5 from "../../assest/portfolio5.png";
import IMG6 from "../../assest/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Course Selling App",
    github: "https://github.com/mahideveloper1/course-selling-app",
    demo: "https://course-app-pink.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dashboard",
    github: "https://github.com/mahideveloper1/Adv-Dashboard",
    demo: "https://dashboard-nu-jade.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "To-Do App",
    github: "https://github.com/mahideveloper1/to-do-list",
    demo: "https://to-do-list-delta-lime.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "E-Commerce",
    github: "https://github.com/mahideveloper1/E-commerce",
    demo: "https://www.youtube.com/watch?v=9urCdxU3rYI",
  },
  {
    id: 5,
    image: IMG5,
    title: "Twitter",
    github: "https://github.com/mahideveloper1/Twitter-frontend",
    demo: "https://github.com/mahideveloper1/Twitter-server",
  },
  {
    id: 6,
    image: IMG6,
    title: "Real Estate Managing App",
    github: "https://github.com/MaheshVashisth/todo-pomodoro-app",
    demo: "https://github.com/MaheshVashisth/todo-pomodoro-app",
  },
];
const Project = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LiveDemo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
