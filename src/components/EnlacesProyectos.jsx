import { Link } from "react-router-dom";
import web from "/images/web.png";
import readme from "/images/readme.png";
import codigo from "/images/codigo.png";
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
        <div className="flex justify-center border space-x-20 shadow-lg rounded-md py-2 ">
            
            <Link to={proyecto.url} target="_blank" className=" hover:border hover:border-black">
                <img
                    src={web}
                    alt="enlace a web"
                    className="w-6 m-1 shadow-xl shadow-gray-400 rounded-xl "
                    title={!ingles ? "Enlace a web" : "Link to web"}
                />
            </Link>
            <button
                onClick={handleDescripcion}
                alt="readme"
                className=" rounded-md  hover:border hover:border-black"
                title={!ingles ? "Descripción del proyecto" : "Project description"}

            >
                <img
                    src={readme}
                    alt="readme"
                    className="w-6 m-1 shadow-xl shadow-gray-400 "
                />
            </button>
            <button
                onClick={handleTecnologia}
                className=" rounded-md  hover:border hover:border-black"
                title={!ingles ? "Tecnologías utilizadas" : "Used technologies"}
            >
                <img
                    src={codigo}
                    alt="readme"
                    className="w-6 m-1 shadow-xl shadow-gray-400  rounded-sm "
                />
            </button>
            
        </div>
    );
}
export default EnlacesProyectos;
