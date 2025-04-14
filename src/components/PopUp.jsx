import React from "react";

function PopUp({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[100] flex items-center justify-center">
            <div className="bg-white rounded-2xl border-2 border-black p-6 w-[90%] max-w-4xl relative z-[200] shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#1E3A5F] hover:opacity-80 text-xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center text-[#1E3A5F] mb-6">{project.title}</h3>

                {/* Content layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left : Component de jeu */}
                    <div className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg p-4 bg-gray-50">
                        {project.component}
                    </div>

                    {/* Right : Description & Techno */}
                    <div className="flex-1 space-y-4 flex flex-col justify-center">
                        <div>
                            <h4 className="text-lg font-semibold text-[#1E3A5F] mb-1">Description</h4>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-[#1E3A5F] mb-1">Technologies utilisées</h4>
                            <p className="text-gray-700">{project.techno}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
