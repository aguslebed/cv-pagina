

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
        <div className="flex flex-col gap-4 hover:bg-gray-800 rounded-lg p-4 
        shadow-md hover:shadow-lg hover:cursor-pointer hover:scale-105 hover:shadow-gray-400 
        origin-left transition-all" onClick={() => window.open(link, '_blank')}>
            <h3 className="text-2xl">{title}</h3>
            <div className="flex gap-4">
                <img src={`${BASE_URL}${image}`} alt={title} className="w-72 h-56 rounded-xl" />
                <p>{description}</p>

            </div>
            <div className="flex gap-2">
                {tecnologies.map((tecnology) => (
                    <span key={tecnology} className="bg-blue-600 px-2 text-white rounded flex items-center gap-2"><img src={icons[tecnology]} className="w-4 h-4" alt="" />{tecnology}</span>
                ))}
            </div>
        </div>
    )
}