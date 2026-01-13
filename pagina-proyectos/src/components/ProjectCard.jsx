

export default function ProjectCard({ title, description, image, link, tecnologies }) {
    return (
        <div className="flex flex-col gap-4 border  border-gray-500 rounded-lg p-4 shadow-md hover:shadow-lg hover:cursor-pointer hover:scale-105 shadow-gray-400 origin-left transition-all">
            <h3 className="text-2xl">{title}</h3>
            <div className="flex gap-4">
                <img src={image} alt={title} className="w-72" />
                <p>{description}</p>

            </div>
            <a href={link}>Link al repositorio</a>
            <div className="flex gap-2">
                {tecnologies.map((tecnology) => (
                    <span key={tecnology} className="bg-blue-600 px-2 text-white rounded">{tecnology}</span>
                ))}
            </div>
        </div>
    )
}