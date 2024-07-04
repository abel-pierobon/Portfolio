import { Link } from "react-router-dom";
import github from "/images/github.png";
import linkedin from "/images/linkedin.png";
import idioma from "../components/idioma.json";
import { useState } from "react";
import abajo from "/images/abajo.png";
import arriba from "/images/arriba.png";

function About({ ingles, handleHome }) {
    const [verMas, setVerMas] = useState(false);
    const handleVerMas = () => {
        setVerMas(!verMas);
        {!verMas ? null : handleHome()}
    };

    const parrafos = ingles
        ? [
            idioma.about.description,
            idioma.about.description1,
            idioma.about.description2,
            idioma.about.description3,
        ]
        : [
            idioma.sobreMi.descripcion,
            idioma.sobreMi.descripcion1,
            idioma.sobreMi.descripcion2,
            idioma.sobreMi.descripcion3,
        ];

    return (
        <div className="sm:mx-1 sm:my-8 lg:mx-12 flex flex-col justify-center bg-##dbdfea text-xs md:text-sm text-justify ">
            <div>
                <p>{parrafos[0]}</p>
                <div className={`md:block ${verMas ? "block" : "hidden"}`}>
                    {parrafos.slice(1).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <button
                    className="md:hidden mt-2 text-blue-500 hover:underline"
                    onClick={handleVerMas}
                >
                    <img src={verMas ? arriba : abajo} alt="opcion" className="w-8 m-1  shadow-xl  hover:transform hover:scale-105 " />
                </button>
            </div>

            <div className="flex justify-center sm:justify-start items-center space-x-4 mt-4">
                <Link
                    to="https://linkedin.com/in/abel-pierobon"
                    target="_blank"
                >
                    <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-8 sm:w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                    />
                </Link>
                <Link to="https://github.com/abel-pierobon" target="_blank">
                    <img
                        src={github}
                        alt="github"
                        className="w-8 sm:w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                    />
                </Link>
            </div>
        </div>
    );
}

export default About;
