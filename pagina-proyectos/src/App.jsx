import { useState, useEffect } from "react"
import ProjectCard from "./components/ProjectCard"
function App() {
  const BASE_URL = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        const navId = `nav${current.charAt(0).toUpperCase() + current.slice(1)}`;
        setActiveNavItem(navId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeNavItem, setActiveNavItem] = useState("navPresentacion");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "navPresentacion", label: "Presentacion", href: "#presentacion" },
    { id: "navProyectos", label: "Proyectos", href: "#proyectos" },
    { id: "navContacto", label: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (itemId) => {
    setActiveNavItem(itemId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-josefin">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-cyan-500/50 hover:bg-slate-700/80 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="flex flex-col lg:grid lg:grid-cols-10 w-full">
        {/* Sidebar */}
        <div
          id="sidebar"
          className={`
            fixed lg:sticky top-0 left-0 right-0 lg:col-start-2 lg:col-span-2 
            lg:mt-20 gap-6 lg:gap-8 flex flex-col lg:top-20 
            bg-slate-900/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none
            p-6 lg:p-0 pt-16 lg:pt-0
            transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'}
            z-40 lg:z-30 lg:h-[calc(100vh-5rem)]
            max-h-screen overflow-y-auto
          `}
        >
          <div className="flex flex-col gap-3">
            <div id="nombre" className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <h2 className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Agustin Lebed</h2>
            </div>

            <div id="descripcion" className="text-base lg:text-lg text-gray-400">
              <p>Analista de sistemas | Desarrollador backend</p>
            </div>
          </div>

          <div id="navbar" className="text-base text-gray-400">
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`cursor-pointer transition-all duration-200 py-2 border-l-2 pl-4
                      ${activeNavItem === item.id
                        ? "border-cyan-400 text-white font-semibold"
                        : "border-transparent hover:border-gray-600 hover:text-white"
                      }`}
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div id="contacto" className="flex gap-6 mt-auto lg:mb-20 mb-6">
            <a href="https://www.linkedin.com/in/agustin-lebed" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={`${BASE_URL}linkedin.png`} className="w-10 h-10 opacity-80 hover:opacity-100" alt="LinkedIn" />
            </a>
            <a href="https://github.com/aguslebed" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={`${BASE_URL}github.png`} className="w-10 h-10 opacity-80 hover:opacity-100" alt="GitHub" />
            </a>
          </div>
        </div>

        <div id="main" className="col-start-5 col-span-5 mt-20 flex flex-col gap-16 pb-20">
          <section id="presentacion" className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-cyan-400">Sobre mí</h3>
            <p className="text-lg text-gray-300 leading-relaxed">Analista de sistemas orientado al desarrollo backend. Desarrollo proyectos personales aplicando principios de ingeniería de software, buenas prácticas, diseño de sistemas y resolución de problemas. Con conocimientos en frontend que complementan una visión integral del desarrollo.</p>
          </section>
          <section id="proyectos" className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold text-cyan-400">Proyectos Destacados</h3>
            <ProjectCard title={"Chat + login"}
              description={"Aplicacion simple de chat en tiempo real, con funcion de login o iniciar sesion como invitado. La aplicacion tiene una seccion con chat global, donde todos los ususarios pueden enviar mensajes, y otra opcion para enviar mensajes de manera privada a una persona en particular. Esta ultima opcion solo esta disponible para los usuarios que hayan creado e iniciado sesion con una cuenta. Con este proyecto puse en practica conceptos de registro e inicio de sesion con autenticacion, uso de cookies, websockets y persistencia de datos."}
              link={"https://github.com/aguslebed/Chat---Login"}
              tecnologies={["Node.js", "TypeScript", "React", "Vite", "Express", "Socket.io", "MongoDB", "Tailwindcss"]}
              image={"ChatLogin.png"}
            />
            <ProjectCard title={"Alfabeto dactologico"}
              description={"El proyecto desarrolla un sistema de reconocimiento en tiempo real del alfabeto dactilológico de la lengua de señas utilizando la cámara web. A través de Python, OpenCV y MediaPipe, se detecta la posición de la mano y sus puntos de referencia para identificar letras estáticas, mostrando en pantalla la letra reconocida según la postura de la mano."}
              link={"https://github.com/aguslebed/manos--openCV-"}
              tecnologies={["Python", "OpenCV", "MediaPipe", "Numpy"]}
              image={"AlfabetoDactologico.png"}
            />
            <ProjectCard title={"Sudoku"}
              description={"Juego de Sudoku con 3 dificultades, con opcion de empezar un nuevo juego y de resolver el sudoku actual automaticamente. La logica del juego esta en el backend, donde se genera el tablero y se verifica cada juegada. Mientras que en el frontend se hacen las llamadas al backend y se muestran los resultados. "}
              link={"https://github.com/aguslebed/Sudoku"}
              tecnologies={["Python", "FastAPI", "JavaScript", "HTML", "Tailwindcss"]}
              image={"Sudoku.png"}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
