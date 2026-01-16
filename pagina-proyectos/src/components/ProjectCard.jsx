

export default function ProjectCard({ title, description, image, link, tecnologies }) {
    const icons = {
        "Node.js": "/tecnologies/Nodejs.svg",
        "React": "/tecnologies/React.svg",
        "OpenCV": "/tecnologies/Opencv.png",
        "Tailwind CSS": "/tecnologies/Tailwindcss.svg",
        "TypeScript": "/tecnologies/Typescript.svg",
        "Git": "/tecnologies/Git.svg",
        "GitHub": "/tecnologies/Github.svg",
        "Python": "/tecnologies/Python.png",
        "Postman": "/tecnologies/Postman.svg",
        "MongoDB": "/tecnologies/Mongodb.png",
        "Socket.io": "/tecnologies/Socketio.svg",
        "Tailwindcss": "/tecnologies/Tailwind.svg",
        "Express": "/tecnologies/Expressjs.png",
        "Vite": "/tecnologies/Vite.svg",
        "MediaPipe": "/tecnologies/Mediapipe.png",
        "Numpy": "/tecnologies/Numpy.png",
        "JavaScript": "/tecnologies/Javascript.png",
        "HTML": "/tecnologies/HTML5.png",
        "FastAPI": "/tecnologies/Fastapi.png"
    }

    return (
        <div className="flex flex-col gap-4 hover:bg-gray-800 rounded-lg p-4 
        shadow-md hover:shadow-lg hover:cursor-pointer hover:scale-105 hover:shadow-gray-400 
        origin-left transition-all" onClick={() => window.open(link, '_blank')}>
            <h3 className="text-2xl">{title}</h3>
            <div className="flex gap-4">
                <img src={image} alt={title} className="w-72 h-56 rounded-xl" />
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