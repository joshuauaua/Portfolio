import "./hero.css";
import Silk from "./silk";


<Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-background">
         <Silk className="hero-background-image" alt="Silk background" />
        </div>

        <div className="hero-text">
          <p className="hero-intro">Hello! My name is</p>
          <h3 className="hero-description">
            Joshua Ng. <br/>
            I build thoughtful web experiences.
          </h3>

          <button className="hero-btn">⇊</button>
        </div>
      </div>
    </>
  );
}
