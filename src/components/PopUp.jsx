import React from "react"

function PopUp({ isOpen, onClose, project }) {
  if (!isOpen) return null

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/80 backdrop-blur-sm
      "
    >
      <div
        className="
          relative z-[200]
          w-[90%] max-w-5xl
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.7)]
          p-8 md:p-10
          text-white
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/10
            hover:bg-white/20
            transition
            text-white
          "
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {project.title}
        </h3>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left : component / content */}
          

          {/* Right : text */}
          <div className="flex-1 space-y-6 flex flex-col justify-center">

            {project.display === "externe" ?
              <a href={project.url} className="font-bold underline">Voir le site</a> : ""
            }
            {/* Subtitle */}
            <div>
              <h4 className="text-base font-semibold text-purple-400 mb-2">
                Sous titre
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-base font-semibold text-purple-400 mb-2">
                Description
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            {/* Tech */}
            <div>
              <h4 className="text-base font-semibold text-purple-400 mb-2">
                Technologies utilisées
              </h4>
              <p className="text-gray-300">
                {project.techno}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp
