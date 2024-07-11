import React, { useState } from "react";
import { Link } from "react-router-dom";
import Iconos from "./Iconos";
import ver from "/images/ver.png";
import web from "/images/web.png";
function MostrarCertificados({ constancia, ingles, handleModal }) {
    const iconos = constancia.iconos ? Object.entries(constancia.iconos) : [];

    return (
        <div className="mx-6 flex justify-center  mb-4">
            <article
                key={constancia.id}
                className=" border border-gray rounded-md shadow-lg p-4  hover:border-[#463eed] "
            >
                <div className="m-3 ">
                    <p className="uppercase text-center text-xs md:text-lg text-[#463eed] h-6 md:h-10 mb-1">
                        {ingles ? constancia.nombreEn : constancia.nombre}
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        className="border border-black rounded-lg h-40 md:h-56 md:w-80 lg:h-56 lg:"
                        src={constancia.imagen}
                        alt={constancia.nombre}
                    />
                </div>
                <div className="flex justify-center mt-2 ">
                    <button
                        className="hidden md:flex rounded-lg hover:border hover:border-[#463eed] "
                        onClick={() => handleModal(constancia.id)}
                    >
                        <img
                            src={ver}
                            alt="ver certificado"
                            className="w-10 h-10 border rounded-md m-1 border-gray shadow-lg p-1 hover:border-black"
                        />
                    </button>
                    <Link
                        to={constancia.url}
                        target="_blank"
                        className=" shadow-lg rounded-md px-2  hover:border hover:border-[#463eed]"
                    >
                        <img
                            src={web}
                            alt="version web"
                            className="w-9 h-9 border rounded-md m-1 border-gray shadow-lg  hover:border-black"
                        />
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
