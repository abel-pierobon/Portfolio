import MostrarProyecto from "./MostrarProyecto";

function Proyectos2({data}) {
    return (
        <div className=" grid grid-cols-2">   
            {data.length === 0 ? (
                <p> Cargando proyectos</p>
            ) : (
                data.map((item, i) => {
                    return <MostrarProyecto key={i} proyecto={item} />;
                })
            )}
        </div>
    );
}
export default Proyectos2