import idioma from "../components/idioma.json";
import español from "/images/español.png";
import english from "/images/estadosUnidos.png";

function Barra({
    handleHome,
    handleCertificaciones,
    handleProyectos,
    handleContacto,
    handleIdioma,
    ingles,
}) {
    return (
        <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#a1b2ff] w-full ">
            {!ingles ? (
                <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#a1b2ff] w-full ">
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        c
                        onClick={handleHome}
                    >
                        Inicio
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleCertificaciones}
                    >
                        Certificados
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleProyectos}
                    >
                        Proyectos
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleContacto}
                    >
                        Contacto
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleIdioma}
                    >
                        <img
                        src={english}
                        alt="ingles"
                        className="w-6 hover:transform hover:scale-105 "
                    />
                    </button>
                </div>
            ) : (
                <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#a1b2ff] w-full ">
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        c
                        onClick={handleHome}
                    >
                        {idioma.barra.home}
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleCertificaciones}
                    >
                        {idioma.barra.certificaciones}
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleProyectos}
                    >
                        {idioma.barra.proyectos}
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleContacto}
                    >
                        {idioma.barra.contacto}
                    </button>
                    <button
                        className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"
                        onClick={handleIdioma}
                    >
                        <img
                        src={español}
                        alt="español"
                        className="w-6 hover:transform hover:scale-105 "
                    />
                    </button>
                </div>
            )}
        </div>
    );
}
export default Barra;
