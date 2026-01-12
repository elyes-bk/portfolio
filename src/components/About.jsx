export default function About({ time }) {
  return (
    <section
      id="about"
      className="scroll-mt-32 flex flex-col items-center space-y-10"
    >
      {/* Titre */}
      <h3 className="font-bold text-center text-2xl md:text-3xl">
        Mon <span className="text-purple-400">parcours</span>
      </h3>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl w-full">
        {time.map((item, index) => (
          <div
            key={index}
            className="
              relative
              bg-white/5 backdrop-blur-xl
              border border-white/10
              text-white
              p-6 rounded-xl
              shadow-lg
              transition
              hover:scale-[1.02]
              hover:border-purple-400/40
              space-y-3
            "
          >
            <p className="text-sm text-purple-400 font-semibold">
              {item.period}
            </p>

            {item.alternance && (
              <span
                className="
                  absolute top-3 right-3
                  text-xs font-semibold
                  px-3 py-1
                  rounded-md
                  bg-purple-400/20
                  text-purple-300
                  border border-purple-400/30
                  backdrop-blur
                "
              >
                Alternance
              </span>
            )}


            <h4 className="font-semibold mt-1">
              {item.title}
            </h4>

            {item.poste && (
              <p className="text-sm text-gray-300">
                Poste: {item.poste}
              </p>
            )}

            {item.diplome && (
              <p className="text-sm text-gray-300">
                Diplôme: {item.diplome}
              </p>
            )}

            <p className="text-sm text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
