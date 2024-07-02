import "./App.css";
import Barra from "./components/Barra";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";
function App() {
    const home = useRef(null);
    const certificaciones = useRef(null);
    const proyectos = useRef(null);
    const contacto = useRef(null);
    function scrollToRef(ref) {
        const offset = 70; 
        window.scrollTo({
            top: ref.current.offsetTop - offset,
            behavior: 'smooth'
        });
    }

    const handleHome = () => scrollToRef(home);
    const handleCertificaciones = () => scrollToRef(certificaciones);
    const handleProyectos = () => scrollToRef(proyectos);
    const handleContacto = () => scrollToRef(contacto);

    const [ingles,setIngles] = useState(true)

    const handleIdioma = () => {
        setIngles(!ingles)
    }
    
    return (
        <>
            <BrowserRouter>
                <div className="flex flex-col">
                    <div className="bg-white">
                        <Barra
                            handleHome={handleHome}
                            handleCertificaciones={handleCertificaciones}
                            handleProyectos={handleProyectos}
                            handleContacto={handleContacto}
                            handleIdioma={handleIdioma}
                            ingles={ingles}
                        />
                    </div>
                    <div className="">
                        <Main
                            home={home}
                            certificaciones={certificaciones}
                            proyectos={proyectos}
                            contacto={contacto}
                            ingles={ingles}
                        />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
