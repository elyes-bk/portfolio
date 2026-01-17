'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import coucou from '../../public/assets/coucou.webp'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="accueil"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-12 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12 px-6"
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-purple-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase">
              Disponible pour de nouveaux projets
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white">
              ELYES <br />
              <span className="premium-gradient">DEV WEB</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed font-light"
          >
            À l’issue de mon Bachelor en développement web, j’ai fait le choix de m’orienter vers la cybersécurité.
            Cette décision fait suite à mon intérêt pour le fonctionnement des systèmes informatiques et pour la conception de solutions web robustes et sécurisées.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="/cv_ben_kilani_elyes.pdf"
              download
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Télécharger mon CV</span>
              <div className="absolute inset-0 bg-purple-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
            >
              Voir mes projets
            </a>
          </motion.div>
        </div>

        {/* Avatar Section */}
        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, -45, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative group"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Image Container */}
            <motion.div
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute inset-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-110"
            >
              <Image
                src={coucou}
                alt="Avatar Elyes"
                fill
                className="object-contain p-4 drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 -right-4 bg-main-bg border border-white/10 px-6 py-3 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-2<">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wider">FULLSTACK</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  )
}
