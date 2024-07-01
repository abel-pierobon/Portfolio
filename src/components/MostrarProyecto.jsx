import { Link } from "react-router-dom";

function MostrarProyecto({ proyecto, ingles }) {
    return (
        <div className=" mx-6 my-6 ">
            <article
                key={proyecto.id}
                className=" flex flex-col border border-gray-400 shadow-lg rounded-md w-full h-full my-2  hover:border-black "
            >
                <div className=" m-3">
                    <p className=" uppercase text-center font-bold shadow-2xl shadow-black rounded-lg mb-4">
                        {proyecto.nombre}
                    </p>
                    <div className=" grid grid-cols-1 justify-center mx-6">
                        <div className="video-container rounded-xl border-gray-400 flex justify-center mx-auto">
                            <video controls className=" rounded-xl max-h-72 ">
                                <source src={proyecto.video} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <div className="flex justify-center my-2">
                            <Link to={proyecto.url} target="_blank">
                                {proyecto.nombre === "App React Native" ? (
                                    <p className=" border border-black shadow-lg text-center rounded-md px-4 py-1 hover:bg-[#463eed] hover:text-white">
                                        {ingles ? "Download App" : "Descargar App"}
                                    </p>
                                ) : (
                                    <p className=" border border-black shadow-lg text-center rounded-md px-4 py-1 hover:bg-[#463eed] hover:text-white">
                                        {ingles
                                            ? "Go to Web"
                                            : "Ir al sitio Web"}
                                    </p>
                                )}
                            </Link>
                        </div>
                        <section>
                            <div className="">
                                <p className=" items-center text-sm text-wrap text-ellipsis  overscroll-auto">
                                    {ingles ? proyecto.description : proyecto.descripcion}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </article>
        </div>
    );
}
export default MostrarProyecto;
