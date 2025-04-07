import React from 'react'

const Accueil = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-14 sm:pt-16 bg-[#1E3A5F]">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAF8F5] mb-2 sm:mb-4">
                Elyes Ben Kilani
            </h1>
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FAF8F5]">
                Développeur web
            </h4>
        </div>
        <button className='absolute bottom-5 text-[#FAF8F5]'>suivant</button>
    </main>
  )
}

export default Accueil