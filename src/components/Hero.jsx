'use client'

import Image from "next/image"
import coucou from '../../public/assets/coucou.webp'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-32 flex items-center justify-center text-white"
    >
      <div className="flex flex-col justify-center items-center md:flex-row max-w-6xl w-full gap-6 px-8">
        {/* Avatar */}
        <div className="flex justify-center items-center md:justify-end">
          <div className="relative ">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-600/70" />
            <Image
              src={coucou}
              alt="Avatar Elyes"
              className="relative z-10 h-[150px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Texte */}
        <div className="md:w-2/3 text-center space-y-10 max-w-[600px] md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold ">
            Elyes, <br />
            <span className="text-purple-400">
              Développeur Web
            </span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Passionné par le développement web, je suis actuellement en préparation de ma 3ᵉ année
            de Bachelor et à la recherche d’une alternance en tant que développeur web.
            <br />
            J’accorde une attention particulière à <span className="text-white font-medium">React</span> et
            <span className="text-white font-medium"> Next.js</span>, que j’apprécie pour leur flexibilité,
            leurs performances et leurs écosystèmes modernes.
          </p>

          {/* CTA optionnel */}
          <div className="pt-4 w-full">
            <a
              href="#contact"
              className="w-full px-3 py-2 rounded-full
                bg-purple-400/20 
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
