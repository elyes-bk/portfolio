import styles from "@/components/css/stack.module.css"

export default function Stack({ stacks }) {
  return (
    <section
      id="stack"
      className="text-[#FAF8F5] scroll-mt-32 overflow-hidden space-y-10"
    >
      {/* Title */}
      <div className="text-center px-4 space-y-10">
        <h2 className="font-bold text-2xl md:text-3xl">
          <span className="text-purple-400">Technologies </span>utilisé
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Les outils et technologies que j’ai pu utiliser pour concevoir
          des applications modernes et performantes.
        </p>
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-3 gap-8 px-6 md:hidden">
        {stacks.map((stack, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={stack.imageUrl}
              alt={stack.title}
              className="w-10 h-10 opacity-90"
            />
            <p className="text-xs text-gray-300">{stack.title}</p>
          </div>
        ))}
      </div>

      {/* Desktop slider */}
      <div className="hidden md:block w-full">
        <div className={styles.slider}>
          <div className={styles.track}>
            {[...stacks, ...stacks].map((stack, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center gap-3
                  min-w-[120px]
                  opacity-80
                  hover:opacity-100
                  transition
                "
              >
                <img
                  src={stack.imageUrl}
                  alt={stack.title}
                  className="w-14 h-14"
                />
                <p className="text-sm text-gray-300">
                  {stack.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
