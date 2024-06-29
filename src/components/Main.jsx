import Home from "./Home.jsx";
import About from "./About.jsx";
import Proyectos from "./Proyectos.jsx";
import Certificaciones from "./Certificaciones.jsx";
import Contact from "./Contact.jsx";

function Main({ home, about, certificaciones, proyectos, contacto }) {
    return (
        <div className=" mx-20 ">
            <Home home={home} />
            <Certificaciones certificaciones={certificaciones} />
            <Proyectos proyectos={proyectos} />
            <Contact contacto={contacto} />
        </div>
    );
}
export default Main;
