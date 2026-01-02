// import { useState } from "react";
import "./About.css";

// const [factIndex, setFactIndex] = useState();

// const handleNextFact = () => {
//   setFactIndex((prev) => (prev + 1) % funFacts.length);
// };
export default function About() {
  const funFacts = [
    "I've consumed more coffee than water this semester.",
    "I can solve a Rubik's cube in under 2 minutes.",
    "My favorite coding snack is dried mango.",
    "I once debugged a program for 3 hours only to find a missing semicolon.",
    "I'm a black belt in Taekwondo.",
  ];

  const technologies = [
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind",
    "Python",
    "PostgreSQL",
    "Git",
    "Figma",
  ];

  return (
    <section className="about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* <div className="fun-fact-container">
            <h4 className="fun-fact-title">Fun Fact:</h4>
            <p className="fun-fact-text">{funFacts[factIndex]}</p>
            <button className="fun-fact-button" onClick={handleNextFact}>
              New Fact!
            </button>
          </div> */}
        </div>

        <div className="tech-chips">
          {technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
