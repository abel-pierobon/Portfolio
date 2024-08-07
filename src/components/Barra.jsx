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
        <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#463eed] w-full ">
            <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#5C61F8] w-full ">
                <button
                    className="  px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl text-[#edf2ff] font-semibold hover:font-bold"
                    onClick={handleHome}
                >
                    {ingles ? idioma.barra.home : "Inicio"}
                </button>
                <button
                    className=" px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl text-[#edf2ff] font-semibold hover:font-bold"
                    onClick={handleCertificaciones}
                >
                    {ingles ? idioma.barra.certificaciones : "Certificados"}
                </button>
                <button
                    className=" px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl text-[#edf2ff] font-semibold hover:font-bold"
                    onClick={handleProyectos}
                >
                    {ingles ? idioma.barra.proyectos : "Proyectos"}
                </button>
                <button
                    className=" px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl text-[#edf2ff] font-semibold hover:font-bold"
                    onClick={handleContacto}
                >
                    {ingles ? idioma.barra.contacto : "Contacto"}
                </button>
                <button
                    className=" px-1 sm:px-2 py-1 mx-1 text-sm sm:text-lg  xl:text-2xl text-[#edf2ff] font-semibold hover:font-bold"
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
