'use client'
import React, { useState } from 'react'

function Navbar(props){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-[#1E3A5F] bg-opacity-80 backdrop-blur-sm shadow-lg z-[100]">
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <a href='./' className="text-[#FAF8F5] font-bold text-lg sm:text-xl hover:opacity-80 transition-all">
            Logo
          </a>

          {/* Menu Mobile Burger*/}
          <div className="block md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAF8F5] hover:opacity-80 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center space-x-4 lg:space-x-8">
            {props.encres.map((encre) => (
              <a 
                key={encre.name} 
                href={encre.ref}
                className="text-sm sm:text-base text-[#FAF8F5] hover:opacity-80 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#FAF8F5] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {encre.name}
              </a>
            ))}
          </div>
        </div>

        {/* Menu Mobile Déroulant */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-3`}>
          {props.encres.map((encre) => (
            <a
              key={encre.name}
              href={encre.ref}
              className="block py-2 text-sm sm:text-base text-[#FAF8F5] hover:opacity-80 transition-all duration-300"
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