import { useState } from "react";
import { Link } from "react-router-dom";
import Descripciones from "./Descripciones";
import TecnologiasDesc from "./TecnologiasDesc";
import Card from "./Card";
import EnlacesProyectos from "./EnlacesProyectos";
function MostrarProyecto({ proyecto, ingles }) {
    const [verDescripcion, setVerDescripcion] = useState(false);
    const [verTecnologia, setVerTecnologia] = useState(false);

    const handleDescripcion = () => {
        setVerDescripcion(!verDescripcion);
        setVerTecnologia(false);
    };

    const handleTecnologia = () => {
        setVerTecnologia(!verTecnologia);
        setVerDescripcion(false);
    };
    return (
        <div className=" mx-6 my-6 ">
            <article
                key={proyecto.id}
                className=" flex flex-col border border-gray-400 shadow-lg rounded-md w-full h-full my-2  hover:border-black "
            >
                <div className=" m-3">
                    <p className=" uppercase text-center font-bold shadow-2xl shadow-black rounded-lg mb-4 text-[#463eed]">
                        {proyecto.nombre}
                    </p>
                    <div className=" grid grid-cols-1 justify-center mx-6">
                        <div className="video-container rounded-xl border-gray-400 flex justify-center mx-auto">
                            <video controls className=" rounded-xl max-h-72 ">
                                <source src={proyecto.video} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <div className="flex flex-col justify-center my-2">
                            
                            <EnlacesProyectos
                                ingles={ingles}
                                verDescripcion={verDescripcion}
                                handleDescripcion={handleDescripcion}
                                verTecnologia={verTecnologia}
                                handleTecnologia={handleTecnologia}
                                proyecto={proyecto}
                            />
                            <Descripciones
                                proyecto={proyecto}
                                ingles={ingles}
                                verDescripcion={verDescripcion}
                                handleDescripcion={handleDescripcion}
                            />
                            <TecnologiasDesc
                                proyecto={proyecto}
                                ingles={ingles}
                                verTecnologia={verTecnologia}
                                handleTecnologia={handleTecnologia}
                            />
                            <Card />
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
export default MostrarProyecto;
