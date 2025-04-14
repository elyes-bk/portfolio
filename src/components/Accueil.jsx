import React from 'react'

const Accueil = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-14 sm:pt-16 bg-[#1E3A5F]">
        <div className="text-center">
            <h1 className="font-bold text-[#FAF8F5] mb-2 sm:mb-4">
                Elyes <br/> Ben Kilani
            </h1>
            <h3 className="text-[#FAF8F5]">
                Développeur web
            </h3>
        </div>
        <button className='absolute bottom-5 text-[#FAF8F5]'>
          <a href="#about">
          <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>          </a>
        </button>
    </main>
  )
}

export default Accueil