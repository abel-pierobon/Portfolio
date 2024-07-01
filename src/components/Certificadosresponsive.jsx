import { Link } from "react-router-dom";
function Certificadosresponsive({ constancia }) {
    return (
        <div>
            <article
                key={constancia.id}
                className=" border border-gray rounded-md shadow-lg p-4  hover:border-black "
            >
                <div className="m-3 ">
                    <p className="uppercase text-center text-[#463eed]">
                        {constancia.nombre}
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
                        className=" border border-gray-500 shadow-lg text rounded-md px-2 py-1 hover:bg-[#463eed] hover:text-white"
                    >
                        {"Version Web"}
                    </Link>
                </div>
            </article>
        </div>
    );
}
export default Certificadosresponsive;
