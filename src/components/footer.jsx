import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left Section - Contact */}
        <div className="footer-section">
          <h3 className="footer-title">CONTACT</h3>
          <ul className="footer-list">
            <li>joshua@sonicassembly.se</li>
            <li>+46 (0)7 0748 3975</li>
            <li>Stockholm, Sweden</li>
          </ul>
        </div>

        {/* Right Section - Links */}
        <div className="footer-section">
          <h3 className="footer-title">CONNECT WITH ME</h3>
          <div className="footer-links-grid">
            <ul className="footer-list">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
            <ul className="footer-list">
              <li><a href="#">Substack</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

  
    </footer>
  );
}