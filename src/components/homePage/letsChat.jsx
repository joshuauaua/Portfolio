import './letsChat.css';
import ContactForm from './contactForm';

import LightRays from './lightRays';

export default function LetsChat(){

  return(

    <>

    <div className="contact-container">


    <h1 className="lets-chat">LET'S CHAT!</h1>
    <ContactForm />
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
     </>
  )
}