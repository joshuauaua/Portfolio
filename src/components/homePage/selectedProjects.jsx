import "./selectedProjects.css";
import LightRays from "./lightRays";
import ProjectCard from "./projectCard";

export default function SelectedProjects() {
  return (
    <>
      <div className="selected-projects-container">
        <div className="selected-projects-background">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <div className="selected-projects-content">
          <h1 className="selected-projects-title">SELECTED PROJECTS</h1>
          <button className="selected-projects-btn">All Projects ↗</button>

          <ProjectCard
            project={{
              title: "Portfolio Website",
              tags: ["React", "CSS", "Framer Motion"],
              description: "A responsive portfolio site built with React.",
              image: "./src/assets/overlayimg.png",
              button: {
                link: "https://github.com/joshuang/portfolio",
                text: "View Code",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
