'use client'

import Hero from "@/components/Hero"
import Stacks from "@/components/Stacks"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  const stacks = [
    { title: "React", imageUrl: "/assets/stacks/react.svg" },
    { title: "React Native", imageUrl: "/assets/stacks/react-native.svg" },
    { title: "C++", imageUrl: "/assets/stacks/c++.svg" },
    { title: "Python", imageUrl: "/assets/stacks/python.svg" },
    { title: "NodeJS", imageUrl: "/assets/stacks/nodejs.svg" },
    { title: "NextJS", imageUrl: "/assets/stacks/nextjs.svg" },
    { title: "JavaScript", imageUrl: "/assets/stacks/javascript.svg" },
    { title: "Tailwind CSS", imageUrl: "/assets/stacks/tailwind.svg" },
    { title: "HTML", imageUrl: "/assets/stacks/html.svg" },
    { title: "CSS", imageUrl: "/assets/stacks/css.svg" },
    { title: "WordPress", imageUrl: "/assets/stacks/wordpress.svg" },
    { title: "Figma", imageUrl: "/assets/stacks/figma.svg" },
  ]

  const time = [
    {
      period: "2024 - aujourd'hui",
      title: "Bachelor développement web",
      diplome: "Bachelor développement web",
      poste: "Développeur web",
      description:"Acquisition de compétences en développement web, en particulier en JavaScript ainsi que ses frameworks et bibliothèques, grâce à la réalisation de projets de cours et de projets professionnels collaboratifs",
      alternance: true
    },
    {
      period: "2023 - 2024",
      title: "Licence Informatique",
      diplome: "Licence scientifique, 1ère année, Spécialité informatique",
      description:"Initiation aux bases de l’algorithmique à travers des langages tels que Python et C++.\
        Réalisation de projets pédagogiques, notamment un jeu d’échecs et un générateur de tableaux d’abstraction géométrique",
      alternance: false,
    },
    {
      period: "2018 - 2023",
      title: "Gestionnaire de transport",
      poste: "Gestionnaire de transport",
      description:
        "Gestion des équipes de livraisons, des planning, de la flotte de camion, de la gestion des stocks. Gestion de la relation client ainsi que la partie administrative.",
      alternance: false,
    },
    {
      period: "2017 - 2018",
      title: "Titre Responsable d'exploitation",
      poste: "Gestionnaire de transport",
      diplome:
        "Titre de responsable d'exploitation, Transport de marchandise terrestre (BAC +3)",
      description:
        "Gestion des opérations de transport et coordination des équipes. Gestion de l'administratif, gestion des plannings, facturation des tournées et livraison",
      alternance: true,
    },
    {
      period: "2014 - 2017",
      title: "BAC PRO Maintenance des équipements industrielles",
      poste: "Technicien de maintenance (SMC PNEUMATIQUE)",
      diplome: "BAC PRO Maintenance des équipements industriels en alternance",
      description:"",
      alternance: true,
    },
  ]

  return (
    <div>
      <main className="space-y-32 pt-[66px]
      md:space-y-[200px] text-sm md:text-base">
        <Hero />
        <Stacks stacks={stacks} />
        <Projects />
        <About time={time} />
        <Contact />
      </main>
    </div>
  )
}
