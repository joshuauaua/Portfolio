import Hero from "../components/homePage/hero";
import SelectedProjects from "../components/homePage/selectedProjects";
import Skillset from "../components/homePage/skillset";
import LetsChat from "../components/homePage/letsChat";
import CircularText from "../components/homePage/circularText";
import Toggle from "../components/toggle";


export default function Home() {
  return (
    <>

      <Hero />
      <CircularText
        text="CREATIVE TECHNOLOGIST * FULLSTACK DEVELOPER * "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
      <Toggle />
      <Skillset />
      <SelectedProjects />
      <LetsChat />

      
    </>
  );
}
