import Card from "./Card";

function Descripciones({
    proyecto,
    ingles,
    verDescripcion,
    handleDescripcion,
}) {
    return (
        <div>
            <section>
                <div className="">
                    <div>
                        {verDescripcion ? (
                            <Card
                                contenido={
                                    ingles
                                        ? proyecto.description
                                        : proyecto.descripcion
                                }
                            />
                        ) : null}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Descripciones;
