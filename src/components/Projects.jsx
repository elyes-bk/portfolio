'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Morpion from '@/components/projets/games/Morpion'
import PopUp from '@/components/PopUp'

export default function Projects() {

  const projects = [
    {
      title: "Sebi La Gazelle",
      subtitle: "Plateforme de jeu pour enfant",
      description:
        "Création d'une plateforme de jeu en ligne pour enfant de 4 à 8 ans. \
        Développement de deux jeux éducatif (mathématique et réflexe) avec un systeme de score et de récompense générer automatiquement par l'IA",
      imageUrl: "/assets/pc.jpg",
      techno: "React.js, Node.js",
    },
    {
      title: "NawwCake",
      subtitle: "Patisserie en ligne",
      description:
        "Développement du site d'une patisserie en ligne, création complète de la charte graphique en passant par le prototypage, le maquettage, \
        jusqu'à la livraison de la solution. \
        Panier, commande, demande d'information directement en ligne, \
        coté admin: ajout, modification, supression de produit et gestion des demandes client",
      imageUrl: "/assets/pc.jpg",
      techno: "Next.js, Prisma ORM, Supabase",
    },
    {
      title: "Vera Web",
      subtitle: "Intelligence artificielle de vérification d'information",
      description:
        "Vera est une IA de vérification d'information accéssible par WhatsApp et Instagram. \
        Elle permet au utilisateur de posé des questions afin de savoir si une info est vrai ou non avec des sources données. \
        Notre rôle dans ce projet ? Refonte de la Landing Page ainsi que l'ajout de Vera Web sur le site en utilisant son API",
      imageUrl: "/assets/pc.jpg",
      component:"oui",
      techno: "Angular, NestJs",
    },
    {
      title: "Voix Publique",
      subtitle: "Voix Publique est une PWA de recensement des événements et de l’histoire de Paris. ",
      description:
        "Elle permet de centraliser les rassemblements publics (manifestations, festivals, expositions) tout en valorisant les récits historiques liés aux lieux de la capitale.\
        L’objectif est d’offrir aux Parisiens et aux habitants de la région une nouvelle manière de découvrir Paris, à travers ses événements, son histoire et ses lieux chargés de mémoire.",
      imageUrl: "/assets/pc.jpg",
      component:"oui",
      techno: "Next.js, Supabase",
    },
  ]

  const [current, setCurrent] = useState(projects.length)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isWrapping, setIsWrapping] = useState(false)

  const activeIndex = current % projects.length

  const openModal = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedProject(null)
  }

  const next = () => setCurrent((prev) => prev + 1)
  const prev = () => setCurrent((prev) => prev - 1)

  // recentrage invisible pour effet infini
  useEffect(() => {
    if (current >= projects.length * 2) {
      setTimeout(() => setCurrent(projects.length), 300)
    }
    if (current <= projects.length - 1) {
      setTimeout(() => setCurrent(projects.length * 2 - 1), 300)
    }
  }, [current, projects.length])

  return (
    <section
      id="projects"
      className="relative scroll-mt-32 overflow-hidden space-y-10"
    >

      <h2 className="relative z-10 pt-0 text-center text-2xl md:text-3xl font-semibold text-white">
        <span className="text-purple-400">Projets </span>professionnels 
      </h2>

      {/* Carousel */}
      <div className="relative z-10 mx-auto h-[460px] w-full flex justify-center [perspective:1400px]">
        {projects.map((project, index) => {
          // Offset par rapport à la carte active
          let offset = index - activeIndex

          // Wrap circulaire (chemin le plus court)
          const half = Math.floor(projects.length / 2)
          if (offset > half) offset -= projects.length
          if (offset < -half) offset += projects.length

          // Nombre de cartes visibles (gauche / centre / droite)
          if (Math.abs(offset) > 1) return null

          // Paramètres du manège
          const x = offset * 320
          const y = Math.abs(offset) * 20       // ⬅ effet arc
          const rotateY = offset * 35
          const scale = offset === 0 ? 1 : 0.88
          const opacity = offset === 0 ? 1 : 0.55

          return (
            <motion.div
              key={project.title}
              className="absolute"
              animate={{
                x,
                y,
                rotateY,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
              }}
              style={{
                zIndex: 10 - Math.abs(offset),
                transformStyle: "preserve-3d",
              }}
            >
              {/* CARTE */}
              <div
                className="
                  relative w-[300px] h-[400px]
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  shadow-[0_25px_70px_rgba(0,0,0,0.6)]
                  overflow-hidden
                  transform-gpu
                  will-change-transform
                  [backface-visibility:hidden]
                "
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="300px"
                  className="object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-5 text-white">
                    <h4 className="text-lg font-semibold">{project.title}</h4>

                    {project.subtitle && (
                      <p className="text-sm text-gray-300">
                        {project.subtitle}
                      </p>
                    )}

                    {offset === 0 && (
                      <button
                        onClick={() => openModal(project)}
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-purple-400/30
                          bg-purple-500/10
                          px-4 py-1.5
                          text-sm
                          text-purple-300
                          hover:bg-purple-500/20
                          hover:text-white
                          transition
                        "
                      >
                        Voir le projet →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>



      {/* Boutons navigation */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-6 z-20
                  bg-white/30 backdrop-blur-md
                  p-1 rounded-full
                  hover:bg-white/20 transition"
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="rounded-full h-8 w-8 fill-purple-400"
        >
          <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 right-6 z-20
                  bg-white/30 backdrop-blur-md
                  p-1 rounded-full
                  hover:bg-white/20 transition"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="rounded-full h-8 w-8 fill-purple-400"
        >
          <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
        </svg>
      </button>

      {/* Pagination */}
      <div className="relative z-10 flex justify-center gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + projects.length)}
            className={`
              h-2.5 w-2.5 rounded-full transition-all
              ${activeIndex === index
                ? "bg-purple-400 scale-125"
                : "bg-purple-400/30 hover:bg-purple-400/60"}
            `}
          />
        ))}
      </div>

      {/* Popup */}
      {isOpen && selectedProject && (
        <PopUp
          isOpen={isOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  )
}
