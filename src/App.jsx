import "./App.css";
import Barra from "./components/Barra";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";
function App() {
    const home = useRef(null);
    const certificaciones = useRef(null);
    const about = useRef(null);
    const proyectos = useRef(null);
    const contacto = useRef(null);
    function scrollToRef(ref) {
        const offset = 70; // Ajusta este valor según la altura de tu barra de navegación
        window.scrollTo({
            top: ref.current.offsetTop - offset,
            behavior: 'smooth'
        });
    }

    const handleHome = () => scrollToRef(home);
    const handleCertificaciones = () => scrollToRef(certificaciones);
    const handleProyectos = () => scrollToRef(proyectos);
    const handleContacto = () => scrollToRef(contacto);

    return (
        <>
            <BrowserRouter>
                <h1 className="uppercase">Portfolio</h1>
                <div className="flex flex-col justify-around">
                    <div className="bg-white">
                        <Barra
                            handleHome={handleHome}
                            handleCertificaciones={handleCertificaciones}
                            handleProyectos={handleProyectos}
                            handleContacto={handleContacto}
                        />
                    </div>
                    <div className="">
                        <Main
                            home={home}
                            certificaciones={certificaciones}
                            proyectos={proyectos}
                            contacto={contacto}
                        />
                    </div>
                    <div></div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
