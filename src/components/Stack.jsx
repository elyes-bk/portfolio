//!!!!!!!!!!!!!!!!!!!!!!!
// NE PLUS TOUCHER CETTE PARTIE
// !!!!!!!!!!!!!!!!!!!!!!


'use client'
import React, { useEffect, useState } from "react";

const Stack = () => {

    const stacks = [
        {
            title: "React",
            imageUrl: "/assets/react.svg"
        },
        {
            title: "React Native",
            imageUrl: "/assets/react-native.svg"
        },
        {
            title: "C++",
            imageUrl: "/assets/c++.svg"
        },
        {
            title: "Python",
            imageUrl: "/assets/python.svg"
        },
        {
            title: "NodeJS",
            imageUrl: "/assets/NodeJS.svg"
        },
        {
            title: "NextJS",
            imageUrl: "/assets/NextJS.svg"
        },
        {
            title: "JavaScript",
            imageUrl: "/assets/javascript.svg"
        },
        {
            title: "Tailwind CSS",
            imageUrl: "/assets/Tailwind.svg"
        },
        {
            title: "HTML",
            imageUrl: "/assets/HTML.svg"   
        },
        {
            title: "CSS",
            imageUrl: "/assets/CSS.svg"
        },
        {
            title: "WordPress",
            imageUrl: "/assets/wordpress.svg"
        },
        {
            title: "Figma",
            imageUrl: "/assets/Figma.svg"
        },
    ]

    return (
        <section className="py-16 bg-[#1E3A5F] overflow-hidden">
            <h2 className="text-3xl font-bold text-center text-[#FAF8F5] mb-10">Technologies</h2>
            
            {/* Vue mobile: grille fixe */}
            <div className="grid grid-cols-2 gap-4 px-4 md:hidden">
                {stacks.map((stack, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img 
                            src={stack.imageUrl} 
                            alt={stack.title} 
                            className="size-16 object-contain"
                        />
                        <p className="mt-2 text-xs text-[#FAF8F5] text-center">{stack.title}</p>
                    </div>
                ))}
            </div>

            {/* Vue tablette et desktop: défilement */}
            <div className="hidden md:block relative w-full">
                <div className="flex overflow-hidden">
                    <div className="flex animate-slide">
                        {[...stacks,...stacks].map((stack, index) => (
                            <div key={index} className="flex flex-col mr-8 items-center min-w-[100px] shrink-0">
                                <img 
                                    src={stack.imageUrl} 
                                    alt={stack.title} 
                                    className="w-16 h-16 object-contain"
                                />
                                <p className="mt-2 text-sm text-[#FAF8F5]">{stack.title}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;