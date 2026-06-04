import { useState, useEffect } from "react"
import WhiteSvg from "./components/WhiteSvg"
import TechnologyLabel from "./components/TechnologyLabel";
import { CarouselProyectos } from "./components/CarousellProyectos";

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
  ];

  const handleNavClick = (itemId) => {
    setActiveNavItem(itemId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white font-goldman flex flex-col md:grid md:grid-cols-5">

      <div className="columna-izquierda md:col-span-2 border-r border-white/10 px-8">
        <div className="info-personal flex flex-col justify-center p-10 md:items-start">
          <div className="foto flex justify-center">
            <img src="foto-perfil.jpeg"
              className="rounded-full w-32 h-32 object-cover"
              alt="" />
          </div>

          <div className="info flex flex-col items-center mt-4 gap-4 w-full md:items-start">
            <h1 className="text-3xl font-bold">Agustin Lebed</h1>
            <span className="text-white/80">Analista de sistemas - Desarrollador de software</span>
          </div>

          <div className="contacto">
            <ul className="flex flex-col mt-4 gap-8 items-center md:grid md:grid-cols-2 md:justify-center">
              <li className="flex items-center gap-2">
                <a href="mailto:agus.lebed@gmail.com" className="flex items-center gap-2">
                  <img src={`${BASE_URL}email.svg`} alt="Email" className="w-5 h-5" />
                  <span className="text-white/80">Email</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/agustin-lebed/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src={`${BASE_URL}linkedin.png`} alt="LinkedIn" className="w-5 h-5" />
                  <span className="text-white/80">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/aguslebed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src={`${BASE_URL}tecnologies/github.png`} alt="GitHub" className="w-5 h-5" />
                  <span className="text-white/80">GitHub</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="Agustin-Lebed-Curriculum.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhiteSvg className="w-5 h-5" />
                  <span className="text-white/80">CV</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-white/10 md:hidden" />

        <div className="tecnologias flex flex-col items-center p-6  md:items-start ">
          <h3 className="text-xl font-bold mb-4">Tecnologías</h3>
          <div className="languages flex flex-col gap-2 ">
            <h4>Lenguajes</h4>
            <div className="labels flex flex-wrap gap-2 justify-center md:justify-start">
              <TechnologyLabel tecnology={"Python"} />
              <TechnologyLabel tecnology={"JavaScript"} />
              <TechnologyLabel tecnology={"Java"} />
            </div>
          </div>

          <div className="languages flex flex-col gap-2 my-2 ">
            <h4>Frameworks/librerias</h4>
            <div className="labels flex flex-wrap gap-2 justify-center md:justify-start">
              <TechnologyLabel tecnology={"Node.js"} />
              <TechnologyLabel tecnology={"React"} />
              <TechnologyLabel tecnology={"Tailwindcss"} />
              <TechnologyLabel tecnology={"FastAPI"} />
              <TechnologyLabel tecnology={"Numpy"} />
              <TechnologyLabel tecnology={"MediaPipe"} />
            </div>
          </div>

          <div className="languages flex flex-col gap-2 my-2">
            <h4>Herramientas</h4>
            <div className="labels flex flex-wrap gap-2 justify-center md:justify-start">
              <TechnologyLabel tecnology={"Git"} />
              <TechnologyLabel tecnology={"GitHub"} />
              <TechnologyLabel tecnology={"Vite"} />
              <TechnologyLabel tecnology={"Postman"} />
              <TechnologyLabel tecnology={"MongoDB"} />
              <TechnologyLabel tecnology={"SQL"} />
              <TechnologyLabel tecnology={"Docker"} />
            </div>
          </div>


        </div>
      </div>
      <hr className="border-white/10 md:hidden" />

      <div className="columna-derecha md:col-span-3 min-w-0">
        <div className="proyectos flex flex-col items-center p-6">
          <h3 className="text-xl font-bold mb-4">Proyectos</h3>
        </div>
        <CarouselProyectos />
      </div>

    </div>
  )
}

export default App
