
export default function TechnologyLabel({tecnology}){
    const BASE_URL = import.meta.env.BASE_URL;
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
        "Docker": `${BASE_URL}tecnologies/Docker.svg`
    }


    return (
         <span key={tecnology} className="bg-slate-700/60 justify-center sm:px-3 py-1 sm:py-1.5 text-xs text-gray-200 rounded-full
                            flex items-center gap-2 border border-slate-600/50 
                            lg:text-sm lg:pr-5 lg:py-2
                            hover:border-cyan-500/50  hover:cursor-default
                            transition-colors"
                            >
                                <img src={icons[tecnology]} className="w-4 h-4" alt="" />
                                <span className="inline md:hidden xl:inline">{tecnology}</span>
                            </span>
    )
}