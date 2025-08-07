import "../components/hero.css";
import Silk from './Silk';

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
      <Silk className="hero-background"/>
      </div>

      <div className="hero-text">
      <h3 className ="hero-intro">Hello, my name is Joshua Ng.</h3>
      <h2 className = "hero-description">I build thoughtful web experiences.</h2>
      <button className = "hero-btn">⇊</button>
      </div>
      </div>
    </>
  );
}
