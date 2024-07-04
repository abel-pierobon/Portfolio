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
            <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#a1b2ff] w-full ">
                <button
                    className="  px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl font-semibold hover:font-bold hover:text-[#463eed]"
                    onClick={handleHome}
                >
                    {ingles ? idioma.barra.home : "Inicio"}
                </button>
                <button
                    className="  px-2 py-1 mx-1 text-sm sm:text-lg xl:text-2xl font-semibold hover:font-bold hover:text-[#463eed]"
                    onClick={handleCertificaciones}
                >
                    {ingles ? idioma.barra.certificaciones : "Certificados"}
                </button>
                <button
                    className="  px-2 py-1 mx-1 text-sm sm:text-lg xl:text-2xl font-semibold hover:font-bold hover:text-[#463eed]"
                    onClick={handleProyectos}
                >
                    {ingles ? idioma.barra.proyectos : "Proyectos"}
                </button>
                <button
                    className="  px-2 py-1 mx-1 text-sm sm:text-lg xl:text-2xl font-semibold hover:font-bold hover:text-[#463eed]"
                    onClick={handleContacto}
                >
                    {ingles ? idioma.barra.contacto : "Contacto"}
                </button>
                <button
                    className="  px-2 py-1 mx-1 text-sm sm:text-lg xl:text-2xl font-semibold hover:font-bold hover:text-[#463eed]"
                    onClick={handleIdioma}
                >
                    <img
                        src={ingles ? español : english}
                        alt="idioma"
                        className="w-6 xl:w-8 hover:transform hover:scale-105 "
                    />
                </button>
            </div>
        </div>
    );
}
export default Barra;
