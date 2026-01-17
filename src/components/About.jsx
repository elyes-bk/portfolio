'use client'

import { motion } from "framer-motion"

export default function About({ time }) {
  return (
    <section
      id="about"
      className="flex flex-col items-center"
    >
      {/* Title section */}
      <div className="text-center mb-16 space-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white"
        >
          MON <span className="premium-gradient">PARCOURS</span>
        </motion.h3>
        <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl w-full">
        {time.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="
              relative group
              bg-white/[0.03] backdrop-blur-2xl
              border border-white/10
              p-8 rounded-[2rem]
              transition-all duration-500
              hover:bg-white/[0.06]
              hover:border-purple-500/50
              hover:-translate-y-2
              flex flex-col
            "
          >
            {/* Background Glow on hover */}
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-[2rem]" />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="text-sm font-bold text-purple-400 tracking-wider">
                {item.period}
              </span>
              {item.alternance && (
                <span className="text-[10px] font-black px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 uppercase tracking-widest">
                  Alternance
                </span>
              )}
            </div>

            <div className="space-y-4 relative z-10 flex-grow">
              <h4 className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>

              <div className="space-y-2">
                {item.poste && (
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                    <p className="text-xs font-bold text-white/40 uppercase tracking-tighter">
                      {item.poste}
                    </p>
                  </div>
                )}
                {item.diplome && (
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 mt-1.5 bg-purple-500/40 rounded-full" />
                    <p className="text-xs font-medium text-white/50 italic">
                      {item.diplome}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm leading-relaxed text-white/40 font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                {item.description}
              </p>
            </div>

            {/* Decorative element */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <div className="w-8 h-1 bg-white/10 rounded-full group-hover:w-full group-hover:bg-purple-500/30 transition-all duration-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
