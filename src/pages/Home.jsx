import Header from '../components/Header';
import SelectedProjects from '../components/selectedprojects';
import Skillset from '../components/skillset';
import ContactForm from '../components/contactForm';

export default function Home(){

  return(
    <>
    <Header />
    <Skillset />
    <SelectedProjects />
    <ContactForm />
    </>
  )
}