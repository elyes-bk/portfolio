'use client'
import React, { useState } from "react";
import Image from "next/image";


const AboutMe = () => {
    const [activeItem, setActiveItem] = useState(null);

    const timelineItems = [
        {
            period: "2024 - aujourd'hui",
            title: "Bachelor",
            description: "Bachelor développement web"
        },
        {
            period: "2023 - 2024",
            title: "Licence Informatique",
            description: "Licence scientifique, 1ère année, Spécialité informatique"
        },
        {
            period: "2018 - 2023",
            title: "Expérience Professionnelle",
            description: "Gestionnaire de transport"
        },
        {
            period: "2017 - 2018",
            title: "Titre Responsable d'exploitation",
            subtitle: "Gestionnaire de transport",
            description: "Titre de responsable d'exploitation, Transport de marchandise terrestre en alternance (BAC +3)"
        },
        {
            period: "2014 - 2017",
            title: "BAC PRO Maintenance",
            subtitle: "Technicien de maintenance (SMC PNEUMATIQUE)",
            description: "BAC PRO Maintenance des équipements industrielle en alternance"
        }
    ];

    return(
        <section className="min-h-screen flex items-center flex-col justify-center gap-5 py-16 bg-[#FAF8F5]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
                <div className="w-full text-center md:w-1/2 space-y-6 ">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A5F] uppercase">À propos de moi</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-[#2B2B2B]">Salut, moi c’est Elyes.</p>
                    <p>Passionné par le développement web, je suis actuellement en préparation de ma 3ᵉ année de 
                        Bachelor et je suis à la recherche d’une alternance en tant que développeur web.
                        Je m’investis particulièrement dans l’apprentissage de React et Next.js, des technologies que 
                        j’apprécie pour leur flexibilité et leur performance.

                        Sérieux, curieux et impliqué, je cherche à rejoindre une équipe qui me permettra de mettre 
                        en pratique mes compétences, tout en continuant à progresser sur des projets concrets 
                        et stimulants.
                    </p>
                </div>
                <div className="">
                    <Image 
                        src="/assets/pc.jpg"
                        alt="Image d'un pc sur un éditeur de code"
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-lg "
                        priority
                    />
                </div>
            </div>
            {/* Timeline */}
            <div className="w-full mt-16">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1E3A5F] mb-10">Mon Parcours</h3>

                {/* Vue mobile en cartes */}
                <div className="md:hidden space-y-6 px-4">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="bg-[#1E3A5F] text-[#FAF8F5] p-6 rounded-lg shadow-lg">
                            <p className="text-xl font-bold mb-3">{item.period}</p>
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            {item.subtitle && (
                                <p className="text-xl font-semibold mb-2">{item.subtitle}</p>
                            )}
                            <p className="text-sm opacity-80">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Vue desktop: timeline */}
                <div className="hidden md:block">
                    {/* Dates au-dessus */}
                    <div className="flex justify-between mb-4">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="w-1/5 text-center">
                                <p className="text-[#1E3A5F] font-bold text-xl">{item.period}</p>
                            </div>
                        ))}
                    </div>

                    {/* Timeline avec points et infobulles */}
                    <div className="flex justify-between items-start relative">
                        {/* Ligne de connexion */}
                        <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#1E3A5F] z-0"></div>
                        
                        {/* Points et infobulles */}
                        {timelineItems.map((item, index) => (
                            <div 
                                key={index}
                                className="w-1/5 flex flex-col items-center relative z-10"
                                onMouseEnter={() => setActiveItem(index)}
                                onMouseLeave={() => setActiveItem(null)}
                            >
                                {/* Point */}
                                <div className={`w-8 h-8 bg-[#1E3A5F] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activeItem === index ? 'scale-125' : ''}`}>
                                    <div className="w-4 h-4 bg-[#FAF8F5] rounded-full"></div>
                                </div>
                                
                                {/* Info Box */}
                                <div className={`absolute top-12 w-48 bg-[#1E3A5F] text-[#FAF8F5] p-4 rounded-lg shadow-lg transition-all duration-300 text-center ${activeItem === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <h4 className="font-semibold mb-1">{item.title}</h4>
                                    {item.subtitle && <p className="text-sm mb-2">{item.subtitle}</p>}
                                    <p className="text-xs">{item.description}</p>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-b-[#1E3A5F]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;