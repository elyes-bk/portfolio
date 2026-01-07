'use client'

import Image from "next/image"
import coucou from '../../public/assets/coucou.webp'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-32 flex items-center justify-center px-6 md:px-16  text-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* Avatar */}
        <div className="flex justify-center md:justify-start relative">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/30" />

            <Image
              src={coucou}
              alt="Avatar Elyes"
              className="relative z-10 w-48 h-48 md:w-60 md:h-60 object-contain"
              priority
            />
          </div>
        </div>

        {/* Texte */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm text-purple-300 tracking-wide">
            Hello ! Moi c’est
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Elyes, <br />
            <span className="text-purple-400">
              Développeur Web
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            Passionné par le développement web, je suis actuellement en préparation de ma 3ᵉ année
            de Bachelor et à la recherche d’une alternance en tant que développeur web.
            <br /><br />
            J’accorde une attention particulière à <span className="text-white font-medium">React</span> et
            <span className="text-white font-medium"> Next.js</span>, que j’apprécie pour leur flexibilité,
            leurs performances et leurs écosystèmes modernes.
          </p>

          {/* CTA optionnel */}
          <div className="pt-4">
            <a
              href="#contact"
              className="w-full py-3 rounded-full
                bg-purple-400/20 px-4
                border border-purple-400/40
                text-purple-300 font-medium
                hover:bg-purple-400/30
                hover:text-white
                transition
                disabled:opacity-50"
>
              Me contacter
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
