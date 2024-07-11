import Card from "./Card";

function Descripciones({
    proyecto,
    ingles,
    verDescripcion,
    handleDescripcion,
}) {
    return (
        <div>
            {verDescripcion ? (
                <Card
                    contenido={
                        ingles ? proyecto.description : proyecto.descripcion
                    }
                />
            ) : null}
        </div>
    );
}
export default Descripciones;
