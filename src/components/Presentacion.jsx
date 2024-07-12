import perfil from "/images/perfil2.png";
import idioma from "../components/idioma.json";
function Presentacion({ ingles }) {
    return (
        <div className="mt-2 mx-0 sm:p-4 sm:mt-8 sm:mx-8 flex flex-col-reverse content center md:justify-between md:flex-row h-auto w-auto ">
            {ingles ? (
                <div className="flex-col content-center  my-6  ">
                    <h1 className=" text-4xl font-semibold justify-center text-[#463eed] flex flex-col">
                        {idioma.presentacion.subtitle}{" "}
                        <span>{idioma.presentacion.span}</span>
                    </h1>
                    <p className="text-sm justify-center text-black xl:text-lg mt-10">
                        {idioma.presentacion.title}
                    </p>
                    <p className="text-sm justify-center text-black xl:text-lg">
                        {idioma.presentacion.edad}
                    </p>
                    <p className="text-sm justify-center text-black xl:text-lg">
                        {idioma.presentacion.description}
                    </p>
                </div>
            ) : (
                <div className="flex-col content-center  my-6 ">
                    <h1 className="text-4xl font-semibold justify-center text-[#463eed] flex flex-col">
                        Desarrollador Web Frontend <span>Data Scientist</span>
                    </h1>
                    <p className="text-sm justify-center text-black xl:text-lg mt-10">
                        Hola, soy Abel Pierobon
                    </p>
                    <p className="text-sm justify-center text-black xl:text-lg">
                        Tengo 37 años
                    </p>
                    <p className="text-sm justify-center text-black xl:text-lg">
                        Vivo en Córdoba Capital, Argentina
                    </p>
                </div>
            )}
            <div className="flex justify-center items-center ">
                <img
                    src={perfil}
                    alt="imagen"
                    className="w-48 h-48 lg:h-60 lg:w-60 pt-1 rounded-full border bg-gray-300 imgPresentacion"
                />
            </div>
        </div>
    );
}
export default Presentacion;
