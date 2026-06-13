

import { useState } from "react";
import ImageModal from "./ImageModal";

export default function ProjectCard({ title, description, image, link, tecnologies, onModalOpen, onModalClose }) {
    const BASE_URL = import.meta.env.BASE_URL;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const icons = {
        "Node.js": `${BASE_URL}tecnologies/Nodejs.svg`,
        "React": `${BASE_URL}tecnologies/React.svg`,
        "OpenCV": `${BASE_URL}tecnologies/Opencv.png`,
        "Tailwind CSS": `${BASE_URL}tecnologies/Tailwindcss.svg`,
        "TypeScript": `${BASE_URL}tecnologies/Typescript.svg`,
        "Git": `${BASE_URL}tecnologies/Git.svg`,
        "GitHub": `${BASE_URL}tecnologies/github.png`,
        "Python": `${BASE_URL}tecnologies/Python.png`,
        "Postman": `${BASE_URL}tecnologies/Postman.svg`,
        "MongoDB": `${BASE_URL}tecnologies/Mongodb.png`,
        "Socket.io": `${BASE_URL}tecnologies/Socketio.svg`,
        "Tailwindcss": `${BASE_URL}tecnologies/Tailwind.svg`,
        "Express": `${BASE_URL}tecnologies/Expressjs.png`,
        "Vite": `${BASE_URL}tecnologies/Vite.svg`,
        "MediaPipe": `${BASE_URL}tecnologies/Mediapipe.png`,
        "Numpy": `${BASE_URL}tecnologies/Numpy.png`,
        "JavaScript": `${BASE_URL}tecnologies/Javascript.png`,
        "HTML": `${BASE_URL}tecnologies/HTML5.png`,
        "FastAPI": `${BASE_URL}tecnologies/Fastapi.png`,
        "Java": `${BASE_URL}tecnologies/Java.svg`,
        "SQL": `${BASE_URL}tecnologies/SQL.svg`,
        "Docker": `${BASE_URL}tecnologies/Docker.svg`,
        "Django": `${BASE_URL}tecnologies/Django.svg`,
        "Playwright": `${BASE_URL}tecnologies/PlayWright.svg`,
        "BeautifulSoup": `${BASE_URL}tecnologies/BeautifulSoup.jpg`,
    }

    return (
        <>
            <div className="group flex flex-col bg-slate-800/40 backdrop-blur-sm rounded-xl overflow-hidden
        shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:bg-slate-800/60 
        cursor-pointer transition-all duration-300 border border-slate-700/50 hover:border-white/50"
                onClick={() => window.open(link, '_blank')}>


                <div className="w-full relative overflow-hidden group/image h-64 sm:h-72 shrink-0">
                    <img
                        src={`${BASE_URL}${image}`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(true);
                            onModalOpen?.();
                        }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors pointer-events-none" />
                </div>


                <div className="p-5 sm:p-6 flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>

                    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

                    <div className="flex gap-2 flex-wrap mt-2">
                        {tecnologies.map((tecnology) => (
                            <span
                                key={tecnology}
                                className="bg-slate-700/60 px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-gray-200 rounded-full 
                            flex items-center gap-2 border border-slate-600/50 hover:border-cyan-500/50 
                            transition-colors"
                            >
                                <img src={icons[tecnology]} className="w-4 h-4" alt="" />
                                {tecnology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    onModalClose?.();
                }}
                imageSrc={`${BASE_URL}${image}`}
                altText={title}
            />
        </>
    )
}