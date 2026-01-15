'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../public/assets/logo.png'

const menuVariants = {
  initial: {
    clipPath: 'circle(0% at 94% 4%)',
  },
  animate: {
    clipPath: 'circle(150% at 94% 4%)',
    transition: {
      type: 'spring',
      stiffness: 35,
      damping: 12,
      restDelta: 2
    },
  },
  exit: {
    clipPath: 'circle(0% at 94% 4%)',
    transition: {
      type: 'spring',
      stiffness: 35,
      damping: 12,
      restDelta: 2
    },
  },
}

const linkVariants = {
  initial: {
    opacity: 0,
    y: 30,
    rotate: 2,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: 20,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeIn',
    },
  }),
}

function Navbar({ encres }) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-[200]
          bg-white/5
          backdrop-blur-xl
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/#accueil" className="flex items-center gap-2 z-[210]">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo Elyes"
              className="opacity-90 active:scale-95 transition-transform"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {encres.map((encre) => (
              <a
                key={encre.name}
                href={encre.ref}
                className="
                  relative text-sm font-medium text-gray-200
                  transition-all duration-300
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-purple-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {encre.name}
              </a>
            ))}
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[210] w-12 h-12 flex flex-col items-center justify-center gap-[6px] focus:outline-none bg-purple-600/10 rounded-full border border-white/10"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-6 h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-6 h-[2px] bg-white block rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="
              fixed inset-0 z-[150]
              bg-[#0A0219]
              flex flex-col items-center justify-center
              pt-20
            "
          >
            {/* Background design elements pour l'aspect premium */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-purple-600/10 blur-[150px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-20 flex flex-col items-center gap-10">
              {encres.map((encre, i) => (
                <motion.div
                  key={encre.name}
                  custom={i}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <a
                    href={encre.ref}
                    onClick={() => setIsOpen(false)}
                    className="
                      text-5xl sm:text-7xl font-bold text-white
                      hover:text-purple-400 transition-colors
                      tracking-tighter hover:scale-110 block
                      duration-300 ease-out
                    "
                  >
                    {encre.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Signature footer in menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-white/20" />
              <p className="text-white/40 text-xs uppercase tracking-[0.4em] font-medium">
                Elyes Portfolio — 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
