import imagen from "/images/perfil.jpg";

function Presentacion() {
    return (
        <div className="mt-20 p-4 mx-8 flex justify-start h-auto w-auto " >
            <div className="flex-col content-center  my-6 ">
                <h1 className="text-4xl font-semibold justify-center text-[#463eed] flex flex-col">
                    Desarrollador Web Front-end <span>Data Science</span>
                </h1>
                <p className="text-sm justify-center text-black mt-10">
                    Hola, soy Abel Pierobon
                </p>
                <p className="text-sm justify-center text-black">
                    Tengo 37 años
                </p>
                <p className="text-sm justify-center text-black">
                    Vivo en Córdoba Capital, Argentina
                </p>
            </div>
            <div className="flex justify-center items-center ml-20">
                <img
                    src={imagen}
                    alt="imagen"
                    className="w-44 h-44 rounded-lg shadow-md m-4"
                />
            </div>
        </div>
    );
}
export default Presentacion;
