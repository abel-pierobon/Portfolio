// import { Link, useParams } from "react-router-dom";
// import { db } from "../firebase";
// import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import MostrarProyecto from "./MostrarProyecto";
import proyectosRealizados from "../db/proyectosRealizados.json"
function Proyectos({ proyectos,ingles }) {
    // const [data, setData] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     const fetchproyectos = async () => {
    //         try {
    //             const proyectCollection = collection(db, "proyectos");
    //             const consulta = await getDocs(proyectCollection);
    //             const proyectos = consulta.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));
    //             setData(proyectos);
    //         } catch (error) {
    //             console.error("Error en carga de proyectos:", error);
    //         }
    //     };

    //     fetchproyectos();
    // }, [id]);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(proyectosRealizados);
    }, []);

    return (
        <div className="my-20 shadow-md bg-white py-4 rounded-md border 2xl:mx-56">
            <div className="flex-col ">
                <h2
                    className=" text-4xl text-center mb-4 text-[#463eed] font-semibold"
                    ref={proyectos}
                >
                    {ingles ? "Projects" : "Proyectos"}
                </h2>
                <div className=" grid sm:grid-cols-2 grid-cols-1">
                    {data.length === 0 ? (
                        <p> Loading</p>
                    ) : (
                        data.map((item, i) => {
                            return <MostrarProyecto key={i} proyecto={item} ingles={ingles}/>;
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
