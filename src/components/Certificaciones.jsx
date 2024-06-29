import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import MostrarCertificados from "./MostrarCertificados";
function Certificaciones({certificaciones}) {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchcertificados = async () => {
            try {
                const certCollection = collection(db, "certificados");
                const consulta = await getDocs(certCollection);
                const certificados = consulta.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(certificados);
            } catch (error) {
                console.error("Error en carga de certificados:", error);
            }
        };

        fetchcertificados();
    }, [id]);
    
    return (
        <div className='my-16 letra flex justify-center shadow-2xl bg-white py-4 rounded-md border '>
            <div className="flex-col content-center a">
                <h2 className=" text-4xl text-center mb-4 text-[#463eed] font-semibold" ref={certificaciones}>Certificaciones</h2>
                <div className=" grid grid-cols-3">   
            {data.length === 0 ? (
                <p> Cargando certificados</p>
            ) : (
                data.map((item, i) => {
                    return <MostrarCertificados key={i} constancia={item} />;
                })
            )}
        </div>
            </div>
        </div>
    );
}

export default Certificaciones;
