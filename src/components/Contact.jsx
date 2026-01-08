'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact(){

  const [state, handleSubmit] = useForm("xeeonnor");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 text-center">
        <h2 className="text-3xl font-bold text-purple-400">
          Message envoyé 🎉
        </h2>
        <p className="mt-4 text-gray-400">
          Je te répondrai rapidement.
        </p>
      </section>
    )
  }
  return (
    <section
      id="contact"
      className="relative scroll-mt-32"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-10">
        {/* Titre */}
        <h2 className=" text-center text-2xl md:text-3xl font-bold">
            Me <span className="text-purple-400">contacter</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Une question, un projet ou simplement envie d’échanger ?
            N’hésite pas à m’écrire.
        </p>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-2xl
            p-4
            space-y-2
            shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 md:space-x-2">

            {/* Nom */}
            <div>
              <label className="block text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                name="name"
                required
                className="
                  w-full rounded-lg
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-pink-500
                  focus:ring-1 focus:ring-pink-500
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="
                  w-full rounded-lg
                  bg-white/10
                  border border-white/10
                  px-4 py-3
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:border-pink-500
                  focus:ring-1 focus:ring-pink-500
                  transition
                "
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          {/* Sujet */}
          <div>
            <label className="block text-gray-300 mb-1">
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              required
              className="
                w-full rounded-lg
                bg-white/10
                border border-white/10
                px-4 py-3
                text-white
                focus:outline-none
                focus:border-pink-500
                focus:ring-1 focus:ring-pink-500
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="
                w-full rounded-lg
                bg-white/10
                border border-white/10
                px-4 py-3
                text-white
                resize-none
                focus:outline-none
                focus:border-pink-500
                focus:ring-1 focus:ring-pink-500
                transition
              "
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Bouton */}
        <button
            type="submit"
            disabled={state.submitting}
            className="
                w-full py-2 rounded-full
                bg-purple-400/20
                border border-purple-400/40
                text-purple-300 font-medium
                hover:bg-purple-400/30
                hover:text-white
                transition
                disabled:opacity-50
            "
            >


            {state.submitting ? "Envoi..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  )
}

