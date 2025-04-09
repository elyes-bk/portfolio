'use client'
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PopUp from './PopUp';
import Morpion from './projets/games/Morpion';


const Project = () => {
    const [slidePercentage, setSlidePercentage] = useState(33.33);
    const [isOpen,setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidePercentage(100); // Mobile: un projet
            } else if (window.innerWidth < 1024) {
                setSlidePercentage(50); // Tablet: Deux projets
            } else {
                setSlidePercentage(33.33); // Desktop: trois projets
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            title: "Jeux du morpion",
            description: "Développement d'un jeu du morpion en Python dans un premier temps puis en JavaScript afin de l'implémenter dans mon portefolio avec du style",
            imageUrl: "/assets/pc.jpg",
            techno: ["python, ","javascript, ","tailwindcss"],
            lien:"lien algorithme python: ",
            component: <Morpion/>
        },
        {
            title: "Site WordPress",
            description: "Création d'un site vitrine pour une apporteuse d'affaires en utilisant WordPress et GreenShift",
            imageUrl: "/assets/pc.jpg",
            techno: ["wordpress, ","greenshift"],
        },
        {
            title: "Site de jeux pour enfants",
            description: ["Création d'un site de jeux pour enfants de 4 à 8 ans en utilisant React et Node.js.",
                "Integration des jeux sur le site avec un systeme de gestion de compte, de point et de récompense d'image générée par l'IA",
                "Création d'un wireframe et d'une maquette sur Figma",
                "Mise en place d'un systeme de sécurité pour les données utilisateurs et de gestion des cookies"],
            imageUrl: "/assets/pc.jpg",
            techno: ["react, ","node.js"]
        }
    ];


    function openPopUp(project){
        setSelectedProject(project)
        setIsOpen(true)
    }

    return (
        <section className="flex flex-col items-center py-20 bg-[#1E3A5F]">
            <h2 className="text-3xl font-bold text-center text-[#FAF8F5] mb-10">Mes Projets</h2>
            <div className="w-full md:max-w-[768px] lg:max-w-[1200px] px-4">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={slidePercentage}
                    swipeable={true}
                    emulateTouch={true}
                    className="custom-carousel"
                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <button
                            onClick={clickHandler}
                            className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-[#FAF8F5] text-[#1E3A5F] p-2 rounded-full hover:bg-opacity-80 transition-all"
                        >
                            ←
                        </button>
                    )}
                    renderArrowNext={(clickHandler, hasNext) => (
                        <button
                            onClick={clickHandler}
                            className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-[#FAF8F5] text-[#1E3A5F] p-2 rounded-full hover:bg-opacity-80 transition-all"
                        >
                            →
                        </button>
                    )}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="flex justify-center px-8 w-full">
                            <div className="bg-[#FAF8F5] rounded-lg shadow-xl p-4 m-2 min-h-[350px] max-h-[200px]  flex flex-col w-full md:max-w-[300px] w-full md:min-w-[200px]">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full max-h-[180px] aspect-video object-cover rounded-lg mb-4" 
                                />
                                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{project.title}</h3>
                                <p className="text-base text-[#2B2B2B] flex-grow">{project.techno}</p>
                                <button className="mt-4 bg-[#1E3A5F] text-[#FAF8F5] py-2 px-4 rounded hover:bg-opacity-90 transition-all w-full sm:w-auto"
                                onClick={() => openPopUp(project)}>
                                    Voir plus
                                </button>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} project={selectedProject}/>
            </div>
        </section>

    );
};

export default Project;
