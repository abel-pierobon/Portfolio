import Home from "./Home.jsx";
import Proyectos from "./Proyectos.jsx";
import Certificaciones from "./Certificaciones.jsx";
import Contact from "./Contact.jsx";

function Main({ home, handleHome,certificaciones, proyectos, contacto,ingles }) {
    return (
        <div className=" mx-4 md:mx-20 ">
            <Home home={home} handleHome={handleHome} ingles={ingles} />
            <Certificaciones certificaciones={certificaciones} ingles={ingles} />
            <Proyectos proyectos={proyectos} ingles={ingles} />
            <Contact contacto={contacto} ingles={ingles} />
        </div>
    );
}
export default Main;
