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
      title: "Bachelor",
      diplome: "Bachelor développement web",
    },
    {
      period: "2023 - 2024",
      title: "Licence Informatique",
      diplome: "Licence scientifique, 1ère année, Spécialité informatique",
    },
    {
      period: "2018 - 2023",
      title: "Gestionnaire de transport",
      poste: "Gestionnaire de transport",
      description:
        "Gestion des équipes de livraisons, des planning, de la flotte de camion, de la gestion des stocks. Gestion de la relation client ainsi que la partie administrative.",
    },
    {
      period: "2017 - 2018",
      title: "Titre Responsable d'exploitation",
      poste: "Gestionnaire de transport",
      diplome:
        "Titre de responsable d'exploitation, Transport de marchandise terrestre en alternance (BAC +3)",
      description:
        "Gestion des opérations de transport et coordination des équipes. Gestion de l'administratif, gestion des plannings, facturation des tournées et livraison",
    },
    {
      period: "2014 - 2017",
      title: "BAC PRO Maintenance",
      poste: "Technicien de maintenance (SMC PNEUMATIQUE)",
      diplome: "BAC PRO Maintenance des équipements industriels en alternance",
    },
  ]

  return (
    <div>
      <main className="space-y-20 py-[80px] 
      md:space-y-32 md:py-[150px] text-sm md:text-base">
        <Hero />
        <Stacks stacks={stacks} />
        <Projects />
        <About time={time} />
        <Contact />
      </main>
    </div>
  )
}
