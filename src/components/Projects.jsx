'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import PopUp from '@/components/PopUp'

export default function Projects() {

  const projects = [
    {
      title: "Sebi La Gazelle",
      subtitle: "Plateforme de jeux éductatifs",
      description: "Création d’une plateforme de jeux en ligne destinée aux enfants de 4 à 8 ans. Développement de deux jeux éducatifs (mathématiques et réflexes) intégrant un système de score et de récompenses générées automatiquement par l’IA.",
      imageUrl: "/assets/pc.jpg",
      display: '',
      techno: "React.js, Node.js",
    },
    {
      title: "NawwCake",
      subtitle: "Site de pâtisserie E-commerce",
      description: "Développement d’un site de pâtisserie en ligne, de la charte graphique jusqu’à la livraison. Mise en place des fonctionnalités de panier, commande et gestion de stock via un tableau de bord administrateur.",
      imageUrl: "/assets/pc.jpg",
      url: 'https://nawwcake.vercel.app/',
      techno: "Next.js, Prisma, Supabase",
    },
    {
      title: "Vera Web",
      subtitle: "IA de Fact-checking",
      description: "Vera est une IA de vérification de l’information accessible via WhatsApp et Instagram. Refonte complète de la landing page et intégration des services d’IA via API pour une expérience fluide.",
      imageUrl: "/assets/pc.jpg",
      display: 'video',
      content: '',
      techno: "Angular, NestJs",
    },
    {
      title: "Voix Publique",
      subtitle: "PWA Événementielle & Historique",
      description: "Application mobile de recensement des événements parisiens. Permet de centraliser les rassemblements publics tout en valorisant les récits historiques liés aux lieux emblématiques de la capitale.",
      imageUrl: "/assets/pc.jpg",
      display: '',
      component: "oui",
      techno: "Next.js, Supabase",
    },
  ]

  const [current, setCurrent] = useState(projects.length)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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
      className="relatives space-y-10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              PROJETS <br />
              <span className="premium-gradient">SÉLECTIONNÉS</span>
            </h2>
            <div className="w-20 h-1.5 bg-purple-500 rounded-full" />
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light">
            Une immersion dans mes dernières réalisations mêlant créativité technique et performance.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mx-auto h-[550px] w-full flex justify-center [perspective:2000px] mb-12">
        {projects.map((project, index) => {
          let offset = index - activeIndex
          const half = Math.floor(projects.length / 2)
          if (offset > half) offset -= projects.length
          if (offset < -half) offset += projects.length

          if (Math.abs(offset) > 1) return null

          const x = offset * 350
          const scale = offset === 0 ? 1 : 0.85
          const rotateY = offset * 25
          const zIndex = 10 - Math.abs(offset)
          const opacity = offset === 0 ? 1 : 0.4

          return (
            <motion.div
              key={project.title}
              className="absolute"
              animate={{ x, scale, rotateY, opacity }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              style={{ zIndex, transformStyle: "preserve-3d" }}
            >
              <div
                className={`
                  relative w-[320px] h-[480px] md:w-[350px] md:h-[500px] lg:w-[400px] lg:h-[550px]
                  rounded-[2.5rem]
                  bg-white/[0.03]
                  backdrop-blur-3xl
                  border border-white/10
                  shadow-[0_40px_100px_rgba(0,0,0,0.8)]
                  overflow-hidden group
                  ${offset === 0 ? 'cursor-default' : 'cursor-pointer pointer-events-none md:pointer-events-auto'}
                `}
                onClick={() => offset !== 0 && setCurrent(index + projects.length)}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${offset === 0 ? 'group-hover:scale-110' : ''}`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-[#05010d]/40 to-transparent">
                  <div className="absolute bottom-0 p-8 w-full space-y-4">
                    <div className="space-y-1">
                      <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">{project.techno}</span>
                      <h4 className="text-2xl lg:text-3xl font-black text-white">{project.title}</h4>
                      <p className="text-white/50 text-sm font-medium line-clamp-1">{project.subtitle}</p>
                    </div>

                    <AnimatePresence>
                      {offset === 0 && (
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          onClick={() => openModal(project)}
                          className="
                            w-full group/btn relative flex items-center justify-center gap-3
                            bg-white text-black font-bold py-4 rounded-2xl
                            overflow-hidden transition-all hover:pr-10
                          "
                        >
                          <span>VOIR LE PROJET</span>
                          <svg className="w-5 h-5 absolute right-6 opacity-0 group-hover/btn:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Controls & Pagination */}
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-90"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index + projects.length)}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-10 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
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
