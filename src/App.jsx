import "./App.css";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [seeMore, setSeeMore] = useState(false);
  // initial value of seeMore is false

  return (
    <div>
      {/* Landing Page */}
      <Hero />
      {/* About me section */}
      <About />
      {/* Projects Section */}
      <section className="projects">
        <div className="projects-content">
          <h2 className="section-title">Personal Projects</h2>
          <div className="projects-grid">
            {/* Put your projects here! */}
            <ProjectCard
              title="Community Dashboard & Analytics"
              description="Full-stack dashboard to monitor, analyze, and engage community members with interactive charts and real-time data visualization."
              image="https://www.rootinc.com/wp-content/uploads/2022/11/placeholder-1.png"
              sourceCodeLink="https://github.com"
            />
            <ProjectCard
              title="Recipe Search App"
              description="A recipe search app that allows you to search for recipes by name, ingredients, or category."
              image="https://www.rootinc.com/wp-content/uploads/2022/11/placeholder-1.png"
              sourceCodeLink="https://github.com"
            />
            <ProjectCard
              title="Finals Week Survival Tracker"
              description="An app specifically designed for the 3:00 AM study sessions in the library. Comes with a built-in tiny violin sound effect for when you look at the rubric."
              image="https://www.rootinc.com/wp-content/uploads/2022/11/placeholder-1.png"
              sourceCodeLink="https://github.com"
            />
            {/* Conditional rendering: only show the project card if seeMore is true */}
            {seeMore && (
              <ProjectCard
                title="Just a Chill API"
                description="A highly sophisticated backend service that stays completely unbothered even when the server is on fire. 0% stress, 100% chill."
                image="https://www.rootinc.com/wp-content/uploads/2022/11/placeholder-1.png"
                sourceCodeLink="https://github.com"
              />
            )}
          </div>

          <button
            className="see-more-button"
            //every time you click the button, the value of seeMore will be toggled
            onClick={() => setSeeMore(!seeMore)}
          >
            {/* if seeMore is true, show "See Less", otherwise show "See More" */}
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
