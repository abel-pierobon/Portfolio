import { Link } from "react-router-dom";
import web from "/images/web.png";
import readme from "/images/readme.png";
import codigo from "/images/codigo.png";
import descargar from "/images/descargar.png";
Link;
function EnlacesProyectos({
    proyecto,
    ingles,
    verDescripcion,
    handleDescripcion,
    verTecnologia,
    handleTecnologia,
}) {
    return (
        <div className="flex justify-center border space-x-12 sm:space-x-20 shadow-lg rounded-md py-2 ">
            
            <Link to={proyecto.url} target="_blank" className="  rounded-md shadow-md shadow-[#463eed]">
                <img
                    src={proyecto.nombre === "App React Native" ?  descargar: web}
                    alt="enlace"
                    className="w-6 m-1  "
                    title={!ingles ?proyecto.nombre === "App React Native" ? "Descargar app" : "Enlace a Web"  :  proyecto.nombre === "App React Native" ? "Download app" : "Link to web" }
                />
            </Link>
            <button
                onClick={handleDescripcion}
                alt="readme"
                className=" rounded-md shadow-md shadow-[#463eed] "
                title={!ingles ? "Descripción del proyecto" : "Project description"}

            >
                <img
                    src={readme}
                    alt="readme"
                    className="w-6 m-1 "
                />
            </button>
            <button
                onClick={handleTecnologia}
                className="rounded-md shadow-md shadow-[#463eed] "
                title={!ingles ? "Tecnologías utilizadas" : "Used technologies"}
            >
                <img
                    src={codigo}
                    alt="readme"
                    className="w-6 m-1  "
                />
            </button>
            
        </div>
    );
}
export default EnlacesProyectos;
