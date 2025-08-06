import "../components/hero.css";

export default function Hero() {
  return (
    <>
    <div className="hero">
      <h3 className ="hero-intro">Hello, my name is </h3>
      <h1 className ="hero-title">Joshua Ng</h1>
      <h2 className = "hero-description">I build thoughtful web experiences.</h2>
      <p className = "hero-text">I am a full-stack developer, creative technologist, and experienced project manager. I specialize in building modern, user-focused web applications that are not only functional but also intuitive and engaging. Currently based in Stockholm, Sweden
      </p>
      <button className = "hero-btn">Explore</button>
      </div>
    </>
  );
}
