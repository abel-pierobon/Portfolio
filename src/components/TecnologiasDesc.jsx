import Card from "./Card";
function TecnologiasDesc({ proyecto, ingles, verTecnologia, handleTecnologia }) {
    return (
        <div>
            <section>
                <div className="">
                    
                    {verTecnologia ? (
                        <Card contenido={!ingles ? proyecto.tecnologias : proyecto.technologies} />              
                    ) : null}
                </div>
            </section>
        </div>
    );
}
export default TecnologiasDesc;
