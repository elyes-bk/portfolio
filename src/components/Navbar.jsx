'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

function Navbar({ encres }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="
        fixed top-0 w-full z-[100]
        bg-white/5
        backdrop-blur-xl
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo Elyes"
              className="opacity-90"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {encres.map((encre) => (
              <a
                key={encre.name}
                href={encre.ref}
                className="
                  relative text-sm font-medium text-gray-200
                  transition
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-purple-500
                  after:transition-all
                  hover:after:w-full
                "
              >
                {encre.name}
              </a>
            ))}
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
<div
  className={`
    md:hidden absolute top-full left-0 w-full flex justify-end
    transition-all duration-300 origin-top
    ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
  `}
>
  <div
    className="
      mx-4 mt-2
      w-2/4
      bg-purple-600/30
      backdrop-blur-xl
      border border-purple-400/30
      rounded-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      py-4
      flex flex-col gap-2
    "
  >
    {encres.map((encre) => (
      <a
        key={encre.name}
        href={encre.ref}
        onClick={() => setIsOpen(false)}
        className="
          mx-4
          py-3
          text-center
          rounded-xl
          text-sm font-semibold text-white
          bg-purple-600/90
          hover:bg-purple-600/70
          transition
        "
      >
        {encre.name}
      </a>
    ))}
  </div>
</div>

    </nav>
  )
}

export default Navbar
