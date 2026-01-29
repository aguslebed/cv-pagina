

export default function ProjectCard({ title, description, image, link, tecnologies }) {
    const BASE_URL = import.meta.env.BASE_URL;
    const icons = {
        "Node.js": `${BASE_URL}tecnologies/Nodejs.svg`,
        "React": `${BASE_URL}tecnologies/React.svg`,
        "OpenCV": `${BASE_URL}tecnologies/Opencv.png`,
        "Tailwind CSS": `${BASE_URL}tecnologies/Tailwindcss.svg`,
        "TypeScript": `${BASE_URL}tecnologies/Typescript.svg`,
        "Git": `${BASE_URL}tecnologies/Git.svg`,
        "GitHub": `${BASE_URL}tecnologies/Github.svg`,
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
        "FastAPI": `${BASE_URL}tecnologies/Fastapi.png`
    }


    return (
        <div className="group flex flex-col gap-4 bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 
        shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-slate-800/60 
        cursor-pointer transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50"
            onClick={() => window.open(link, '_blank')}>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
                    <img
                        src={`${BASE_URL}${image}`}
                        alt={title}
                        className="w-full md:w-64 h-48 rounded-lg object-cover shadow-md border border-slate-600/50"
                    />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{description}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
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
    )
}