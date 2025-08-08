import "./footer.css";
import { render } from "react-dom";

export default function Footer() {
  return (
    <>
    <div className="footer-container">
      


        <div className="footer-left">
        <p className="footer-title">CONTACT</p>

        <div className="footer-text">
        <p>joshua@sonicassembly.se</p>
        <p>+46 (0)7 0748 3975</p>
        <p>Stockholm, Sweden</p>
        </div>
        </div>

        <div className="footer-middle">
        <p className="footer-title">CONNECT WITH ME</p>
        <div className="footer-text">
         <p href="/privacy-policy">GITHUB</p>
         <p href="/terms-of-service">DISCORD</p>
         <p href="/contact">LINKEDIN</p>
        </div>
        </div>
      
        <div className="footer-right">
        <p className="footer-title"> 
          
        </p>
        <div className="footer-text">
         <p href="/privacy-policy">GITHUB</p>
         <p href="/terms-of-service">DISCORD</p>
         <p href="/contact">LINKEDIN</p>
        </div>
        </div>



    </div>

    </>
  );
}
