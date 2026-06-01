import { useState, useEffect } from "react"
import ProjectCard from "./components/ProjectCard"
import WhiteSvg from "./components/WhiteSvg"
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
    <div className="w-full min-h-screen bg-linear-to-br from-black
     via-gray-900 to-black text-white font-goldman
     gird grid-cols-5">


      <div className="info-personal flex flex-col justify-center p-10">
        <div className="foto flex justify-center">
          <img src="foto-perfil.jpeg"
            className="rounded-full w-32 h-32 object-cover"
            alt="" />
        </div>

        <div className="info flex flex-col items-center mt-4 gap-4 w-full">
          <h1 className="text-3xl font-bold">Agustin Lebed</h1>
          <span className="ml-2 text-white/80">Analista de sistemas - Desarrollador de software</span>
        </div>

        <div className="contacto mx-2">
          <ul className="flex flex-col mt-4 gap-4">
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
                <img src={`${BASE_URL}github.png`} alt="GitHub" className="w-5 h-5" />
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

      <hr className="border-white/10" />

      <div className="tecnologias flex flex-col items-center p-6">
        <h3 className="text-xl font-bold mb-4">Tecnologías</h3>
      </div>

      <div className="proyectos"></div>

    </div>
  )
}

export default App
