import Home from "./Home.jsx";
import About from "./About.jsx";
import Proyectos from "./Proyectos.jsx";
import Certificaciones from "./Certificaciones.jsx";
import Contact from "./Contact.jsx";

function Main({ home, certificaciones, proyectos, contacto,ingles }) {
    return (
        <div className=" mx-4 md:mx-20 ">
            <Home home={home} ingles={ingles} />
            <Certificaciones certificaciones={certificaciones} ingles={ingles} />
            <Proyectos proyectos={proyectos} ingles={ingles} />
            <Contact contacto={contacto} ingles={ingles} />
        </div>
    );
}
export default Main;
