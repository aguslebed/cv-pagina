import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Chat + login",
    description: "Aplicacion simple de chat en tiempo real, con funcion de login o iniciar sesion como invitado. La aplicacion tiene una seccion con chat global, donde todos los ususarios pueden enviar mensajes, y otra opcion para enviar mensajes de manera privada a una persona en particular. Esta ultima opcion solo esta disponible para los usuarios que hayan creado e iniciado sesion con una cuenta. Con este proyecto puse en practica conceptos de registro e inicio de sesion con autenticacion, uso de cookies, websockets y persistencia de datos.",
    link: "https://github.com/aguslebed/Chat---Login",
    tecnologies: ["Node.js", "TypeScript", "React", "Vite", "Express", "Socket.io", "MongoDB", "Tailwindcss"],
    image: "ChatLogin.png"
  },
  {
    title: "Alfabeto dactologico",
    description: "El proyecto desarrolla un sistema de reconocimiento en tiempo real del alfabeto dactilológico de la lengua de señas utilizando la cámara web. A través de Python, OpenCV y MediaPipe, se detecta la posición de la mano y sus puntos de referencia para identificar letras estáticas, mostrando en pantalla la letra reconocida según la postura de la mano.",
    link: "https://github.com/aguslebed/manos--openCV-",
    tecnologies: ["Python", "OpenCV", "MediaPipe", "Numpy"],
    image: "AlfabetoDactologico.png"
  },
  {
    title: "Sudoku",
    description: "Juego de Sudoku con 4 dificultades, con opcion de empezar un nuevo juego y de resolver el sudoku actual automaticamente. La logica del juego esta en el backend, donde se genera el tablero y se verifica cada juegada. Mientras que en el frontend se hacen las llamadas al backend y se muestran los resultados. ",
    link: "https://github.com/aguslebed/Sudoku",
    tecnologies: ["Python", "FastAPI", "JavaScript", "HTML", "Tailwindcss"],
    image: "Sudoku.png"
  },
  {
    title: "SICaPSI",
    description: "Proyecto hecho durante el último año de carrera, que consistió en una plataforma para las capacitaciones brindadas por la Asociación de Profesionales de Seguridad de la Provincia de Buenos Aires. El desarrollo fue llevado a cabo por todo el curso, dividiéndose en grupos para tareas como comunicación con el cliente, análisis de requerimientos, diseño, documentación, frontend y backend. La aplicación gestiona distintos perfiles (Administrador, Directivo, Capacitador, Alumno) y destaca por su sistema de evaluaciones interactivas, donde los alumnos toman decisiones en escenarios de video ramificados.",
    link: "https://github.com/aguslebed/SICaPSI",
    tecnologies: ["Node.js", "JavaScript", "React", "Vite", "Express", "Socket.io", "MongoDB", "Tailwindcss"],
    image: "SICaPSI.jpg"
  },
  {
    title: "GPU Tracker",
    description: "Este proyecto es una plataforma web integral diseñada para automatizar la extracción, el seguimiento y la visualización de los precios de las tarjetas gráficas en las principales tiendas de hardware de Argentina. Mediante un sistema de scraping automatizado, la herramienta recolecta diariamente información sobre el valor y el stock de los productos, para luego organizarlos en un catálogo interactivo agrupado por chipset. A través de su interfaz, los usuarios pueden buscar modelos específicos, analizar gráficos detallados con la evolución histórica de los precios para entender las tendencias del mercado y comparar el costo de un mismo componente en múltiples tiendas simultáneamente, todo respaldado por una arquitectura tecnológica robusta basada en Python, Django, React y MongoDB bajo un entorno gestionado completamente por Docker.",
    link: "https://github.com/aguslebed/scraping-gpus",
    tecnologies: ["Python", "Django", "React", "MongoDB", "Docker","Playwright","BeautifulSoup", "Vite"],
    image: "ScrapingGPU.png"
  }
];

export function CarouselProyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (isHovered || isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, isPaused, currentIndex]);

  // Touch Swipe Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto px-4 sm:px-12 group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Track Wrapper */}
      <div 
        className="overflow-hidden rounded-xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full shrink-0 px-1 sm:px-2">
              <ProjectCard
                {...project}
                onModalOpen={() => setIsPaused(true)}
                onModalClose={() => setIsPaused(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 
                   flex items-center justify-center w-10 h-10 rounded-full 
                   bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 
                   hover:bg-slate-800 hover:scale-110 text-white transition-all 
                   backdrop-blur-xs cursor-pointer shadow-lg hover:shadow-cyan-500/10"
        aria-label="Proyecto anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 
                   flex items-center justify-center w-10 h-10 rounded-full 
                   bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 
                   hover:bg-slate-800 hover:scale-110 text-white transition-all 
                   backdrop-blur-xs cursor-pointer shadow-lg hover:shadow-cyan-500/10"
        aria-label="Proyecto siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-2 my-2 md:my-2 lg:my-3 ">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
              currentIndex === index 
                ? "w-8 bg-cyan-400" 
                : "w-2 bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselProyectos;
