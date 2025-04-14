import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx"
import Accueil from "../components/Accueil.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Project from "../components/Project.jsx";
import Stack from "../components/Stack.jsx";
import ContactForm from "../components/ContactForm.jsx";


export default function Home() {
  
  const encres = [
    {name: 'Accueil', ref: '/'},
    {name: 'A propos', ref: '#about'},
    {name: 'Projets', ref: '#projects'},
    {name: 'Contact', ref: '#contact'},
  ]
  
  return (
    <div>
      <Navbar encres = {encres}/>
      <Accueil id="accueil"/>
      <AboutMe id="about"/>
      <Project id="projects"/>
      <Stack id="stack"/>
      <ContactForm id="contact"/>
    </div>
  );
}
