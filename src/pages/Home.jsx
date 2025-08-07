import Header from '../components/Header';
import SelectedProjects from '../components/selectedprojects';
import Shortabout from '../components/shortAbout';
import ContactForm from '../components/contactForm';

export default function Home(){

  return(
    <>
    <Header />
    <Shortabout />
    <SelectedProjects />
    <ContactForm />
    </>
  )
}