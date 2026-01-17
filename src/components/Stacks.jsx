'use client'

import { motion } from "framer-motion"
import styles from "@/components/css/stack.module.css"

export default function Stack({ stacks }) {
  return (
    <section
      id="stack"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-purple-600/5 blur-[100px] -rotate-6 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white"
          >
            MA <span className="premium-gradient">TECH STACK</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-2xl mx-auto font-light text-lg"
          >
            Une sélection d'outils et de technologies modernes pour bâtir
            des solutions performantes et scalables.
          </motion.p>
        </div>

        {/* Categories / Grid for Mobile */}
        <div className="grid text-center grid-cols-3 sm:grid-cols-4 md:hidden gap-4">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 p-4 bg-white/[0.05] rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <img
                src={stack.imageUrl}
                alt={stack.title}
                className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              />
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-tighter">{stack.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee for Desktop */}
        <div className="hidden md:block w-full">
          <div className={styles.slider}>
            <div className={`${styles.track} py-6`}>
              {[...stacks, ...stacks].map((stack, index) => (
                <div
                  key={index}
                  className="
                    group flex flex-col items-center gap-4
                    px-8 py-6 min-w-[160px]
                    bg-white/[0.04] border border-white/10
                    rounded-3xl backdrop-blur-md
                    transition-all duration-500
                    hover:bg-white/[0.08] hover:border-purple-500/30
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                    hover:-translate-y-2
                  "
                >
                  <div className="relative">
                    {/* Subtle glow behind icon */}
                    <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={stack.imageUrl}
                      alt={stack.title}
                      className="relative z-10 w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                  <p className="text-[11px] font-black text-white/60 group-hover:text-white transition-colors tracking-widest uppercase">
                    {stack.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
