import React from "react";
import { Link } from "react-router-dom";
import Iconos from "./Iconos";

function MostrarCertificados({ constancia, ingles }) {
    const iconos = constancia.iconos ? Object.entries(constancia.iconos) : [];

    return (
        <div className="mx-6 flex justify-center mb-4">
            <article
                key={constancia.id}
                className=" border border-gray rounded-md shadow-lg p-4  hover:border-[#463eed] "
            >
                <div className="m-3 ">
                    <p className="uppercase text-center text-[#463eed]">
                        {ingles ? constancia.nombreEn : constancia.nombre}
                    </p>
                </div>
                <div>
                    <img
                        className="imgCertificado border border-black rounded-lg h-56 w-80"
                        src={constancia.imagen}
                        alt={constancia.nombre}
                    />
                    <p>{constancia.descripcion}</p>
                </div>
                <div className="flex justify-center mt-2 ">
                    <Link
                        to={constancia.url}
                        target="_blank"
                        className=" border border-gray-500 shadow-lg text-sm rounded-md px-2 py-1 hover:bg-[#463eed] hover:text-white"
                    >
                        {"Link"}
                    </Link>
                </div>

                <div className="grid grid-cols-6 ">
                    {iconos.length === 0 ? (
                        <p>Cargando iconos</p>
                    ) : (
                        iconos.map(([nombre, url], i) => (
                            <Iconos key={i} nombre={nombre} url={url} />
                        ))
                    )}
                </div>
            </article>
        </div>
    );
}

export default MostrarCertificados;
