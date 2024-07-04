// import { Link, useParams } from "react-router-dom";
// import { db } from "../firebase";
// import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import MostrarCertificados from "./MostrarCertificados";
import certificados from "../db/certificados.json"
function Certificaciones({ certificaciones,ingles }) {
    // const [data, setData] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     const fetchcertificados = async () => {
    //         try {
    //             const certCollection = collection(db, "certificados");
    //             const consulta = await getDocs(certCollection);
    //             const certificados = consulta.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data(),
    //             }));
    //             setData(certificados);
    //         } catch (error) {
    //             console.error("Error en carga de certificados:", error);
    //         }
    //     };

    //     fetchcertificados();
    // }, [id]);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(certificados.certificados);
    }, []);


    return (
        <div className="my-16 letra flex justify-center shadow-2xl bg-white py-4 rounded-md border 2xl:mx-56">
            <div className="flex-col content-center a">
                <h2
                    className="text-4xl text-center mb-4 text-[#463eed] font-semibold"
                    ref={certificaciones}
                >
                {ingles ? "Certificates" : "Certificaciones"}
                    
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.length === 0 ? (
                        <p>Loading</p>
                    ) : (
                        data.map((item, i) => (
                            <MostrarCertificados key={i} constancia={item} ingles={ingles}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Certificaciones;
