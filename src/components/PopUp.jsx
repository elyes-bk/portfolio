'use client'

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

function PopUp({ isOpen, onClose, project }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#05010d]/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="
              relative z-10
              w-full max-w-4xl
              bg-white/[0.03] backdrop-blur-3xl
              border border-white/10
              rounded-[2.5rem]
              p-8 md:p-12
              shadow-[0_50px_100px_rgba(0,0,0,0.9)]
              overflow-hidden
            "
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] -z-10" />

            <button
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-12 h-12 flex items-center justify-center
                rounded-full bg-white/5 border border-white/10
                text-white transition-all hover:bg-white/10 active:scale-90
              "
            >
              ✕
            </button>

            <div className="flex flex-col gap-10">
              <header className="space-y-2">
                <span className="text-purple-400 text-xs font-black tracking-[0.3em] uppercase">
                  Détails du Projet
                </span>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  {project.title}
                </h3>
                <div className="w-16 h-1 bg-purple-500 rounded-full" />
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Aperçu</h4>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Défi & Solution</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Technologies</h4>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techno.split(',').map((t, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80">
                          {t.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <span className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2">
                        Visiter le site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default PopUp
