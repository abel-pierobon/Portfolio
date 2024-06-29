

function Barra({handleHome, handleCertificaciones, handleProyectos, handleContacto}) {
    return (
        <div className=" flex flex-row justify-end fixed top-0 z-10 bg-[#a0b2ff] w-full ">
            <button className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]"c onClick={handleHome}>Inicio</button>
            <button className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]" onClick={handleCertificaciones}>Certificados</button>
            <button className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]" onClick={handleProyectos}>Proyectos</button>
            <button className="  px-2 py-1 mx-1 text-lg font-semibold hover:font-bold hover:text-[#463eed]" onClick={handleContacto}>Contacto</button>
        </div>
    )
}
export default Barra