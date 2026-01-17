'use client'

import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [state, handleSubmit] = useForm("xeeonnor");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto p-12 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-3xl"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">MESSAGE ENVOYÉ !</h2>
          <p className="text-white/40 text-lg font-light">
            Merci pour votre message. Je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white"
          >
            ME <span className="premium-gradient">CONTACTER</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-xl mx-auto font-light text-lg"
          >
            Une question, un projet ou simplement envie d’échanger ?
            Mon formulaire est à votre disposition.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jean Dupont"
                  required
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jean@exemple.com"
                  required
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/10"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Sujet</label>
              <input
                type="text"
                name="subject"
                placeholder="Discutons d'un projet"
                required
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Votre Message</label>
              <textarea
                name="message"
                placeholder="Comment puis-je vous aider ?"
                required
                rows={6}
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-4 text-white resize-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-white/10"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="group relative w-full bg-white text-black font-black py-5 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <span className="relative z-10">{state.submitting ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE"}</span>
              <div className="absolute inset-0 bg-purple-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

