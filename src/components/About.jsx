'use client'
import { useState } from "react"

export default function About({ time }) {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section
      id="about"
      className="relative scroll-mt-32 flex flex-col items-center space-y-10"
    >
      {/* Titre */}
      <h3 className="font-bold text-center text-2xl md:text-4xl">
        Mon <span className="text-purple-400">parcours</span>
      </h3>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden space-y-6 px-6 w-full max-w-xl">
        {time.map((item, index) => (
          <div
            key={index}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              text-white
              p-6
              rounded-xl
              shadow-lg
            "
          >
            <p className="text-sm text-pink-400 font-semibold">
              {item.period}
            </p>

            <h4 className="font-semibold mt-1">
              {item.title}
            </h4>

            {item.poste && (
              <p className="text-sm text-gray-300">
                {item.poste}
              </p>
            )}

            {item.diplome && (
              <p className="text-sm text-gray-300">
                {item.diplome}
              </p>
            )}

            <p className="text-sm text-gray-400 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full ">

        {/* Dates */}
        <div className="flex mb-10 px-[70px]">
          {time.map((item, index) => (
            <div
              key={index}
              className="w-1/5 text-center text-sm text-gray-300 font-medium"
            >
              {item.period}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative flex justify-between">

          {/* Ligne */}
          <div className="absolute top-4 left-0 right-0 h-px bg-white/20" />
          
          <div className="flex px-10 w-full">
          {time.map((item, index) => (
            <div
              key={index}
              className="w-1/5 flex flex-col items-center"
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Point */}
              <div
                className="
                  w-8 h-8 rounded-full
                  bg-purple-400/60
                  flex items-center justify-center
                  transition
                "
              >
                <div className="w-3 h-3 bg-[#0B021D] rounded-full" />
              </div>

              {/* Card hover */}
              {activeItem === index && (
                <div
                  className="
                    min-w-[200px]
                    lg:min-w-[300px]
                    mt-6
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    text-white
                    py-4
                    px-2
                    rounded-xl
                    text-center
                    shadow-xl
                    
                  "
                >
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>

                  {item.poste && (
                    <p className="text-sm text-gray-300">
                      {item.poste}
                    </p>
                  )}

                  {item.diplome && (
                    <p className="text-sm text-gray-300">
                      {item.diplome}
                    </p>
                  )}

                  <p className="text-sm text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
