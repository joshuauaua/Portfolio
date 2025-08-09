import "./selectedProjects.css";
import LightRays from "./lightRays";
import ProjectCard from "./projectCard";

export default function SelectedProjects() {
  return (
    <>
      <div className="selected-projects-container">
        <div className="selected-projects-background">
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        <div className="selected-projects-content">
          <h1 className="selected-projects-title">SELECTED PROJECTS</h1>
          <button className="selected-projects-btn">All Projects ↗</button>

          <ProjectCard
            project={{
              title: "BuildBoard",
              tags: [
                "React",
                "CSS",
                "ASP.NET",
                "SQL Server",
                "Tailwind",
                "Javascript",
              ],
              description: "A responsive portfolio site built with React.",
              image: "./src/assets/buildboard.webp",
              button: {
                link: "https://github.com/joshuang/portfolio",
                text: "View Code",
              },
            }}
          />

          <ProjectCard
            project={{
              title: "Sonic Assembly",
              tags: ["React", "CSS", "Framer Motion"],
              description: "A responsive portfolio site built with React.",
              image: "./src/assets/sonicassembly.png",
              button: {
                link: "https://github.com/joshuang/portfolio",
                text: "View Code",
              },
            }}
          />

          <ProjectCard
            project={{
              title: "Velosonics",
              tags: ["React", "Bootstrap", "Tensorflow.js", "p5.js"],
              description:
                "A machine learning model to classify audio samples.",
              image: "./src/assets/velosonics.webp",
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
