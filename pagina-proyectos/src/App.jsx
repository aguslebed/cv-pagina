import { useState } from "react"
import ProjectCard from "./components/ProjectCard"
function App() {

  const [activeNavItem, setActiveNavItem] = useState("navPresentacion");
  const navItems = [
    { id: "navPresentacion", label: "Presentacion", href: "#presentacion" },
    { id: "navProyectos", label: "Proyectos", href: "#proyectos" },
    { id: "navContacto", label: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="grid grid-cols-10 w-full min-h-screen bg-linear-to-t 
                    from-gray-900 to-gray-700 text-white font-josefin
                    ">
      <div id="sidebar" className="col-start-2 col-span-2 mt-20 gap-12 flex flex-col sticky top-20 h-[calc(100vh-5rem)]">
        <div className="flex flex-col gap-4">
          <div id="nombre" className="text-6xl">
            <h2>Agustin Lebed</h2>
          </div>

          <div id="descripcion" className="text-xl text-gray-300" >
            <p>Analista de sistemas | Desarrollador backend</p>
          </div>
        </div>


        <div id="navbar" className=" text-xl text-gray-300">
          <nav>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveNavItem(item.id)}
                  className={`my-2 cursor-pointer transition-all origin-left
        ${activeNavItem === item.id
                      ? "scale-110 text-white"
                      : "hover:scale-110 hover:text-white"
                    }`}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div id="contacto" className="flex gap-6 mt-auto mb-20">
          <a href="https://github.com/aguslebed" target="_blank" rel="noopener noreferrer"><img src="linkedin.png" className="w-8" alt="" /></a>
          <a href="https://github.com/aguslebed" target="_blank" rel="noopener noreferrer"><img src="github.png" className="w-8" alt="" /></a>
        </div>
      </div>

      <div id="main" className="col-start-5 col-span-5 mt-20 flex flex-col gap-6">
        <section id="presentacion" className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">Presentacion</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officiis, molestiae officia corporis cum voluptatem. Atque, nisi? Illo laboriosam officiis aliquam neque sequi, sit libero quisquam dolores illum rem deserunt laudantium consequuntur architecto aperiam at sed labore, culpa facere aliquid distinctio et earum nulla! Enim repellat non error animi eos?</p>
        </section>
        <section id="proyectos" className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">Proyectos</h3>
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
            description={""}
            link={"https://github.com/aguslebed/Sudoku"}
            tecnologies={["Python", "FastAPI", "JavaScript", "HTML", "Tailwindcss"]}
            image={"Sudoku.png"}
          />
        </section>
      </div>
    </div>
  )
}

export default App
