import { Link } from "react-router-dom";
import github from "/images/github.png";
import linkedin from "/images/linkedin.png";
import idioma from "../components/idioma.json";

function About({ ingles }) {
    return (
        <div className="  sm:mx-0 sm:my-8  lg:mx-12 flex flex-col justify-center  bg-##dbdfea  text-xs md:text-sm text-justify ">
            {ingles ? (
                <div>
                    <p>{idioma.about.description}</p>
                    <p>{idioma.about.description1}</p>
                    <p>{idioma.about.description2}</p>
                    <p>{idioma.about.description3}</p>
                </div>
            ) : (
                <div>
                    <p>
                        Soy un Desarrollador Front-End y Científico de Datos
                        autodidacta y entusiasta. Tengo formación en React JS,
                        React Native, Vue JS, Ciencia de Datos y Análisis de
                        Datos. Me apasiona crear aplicaciones web dinámicas e
                        interactivas, utilizando las mejores prácticas del
                        desarrollo web y aprovechando el poder de los datos.
                    </p>
                    <p>
                        Como Desarrollador Front-End, tengo experiencia en HTML,
                        CSS y JavaScript, que son tecnologías fundamentales para
                        la creación y el diseño de páginas web. Soy competente
                        en frameworks y bibliotecas como React JS, React Native
                        y Vue JS, lo que me permite construir interfaces de
                        usuario responsivas e interactivas. También utilizo
                        Bootstrap y Tailwind CSS para crear diseños responsivos
                        y móviles. Mis habilidades incluyen SASS para estilos
                        avanzados, AJAX para solicitudes web asincrónicas y GIT
                        para control de versiones.
                    </p>
                    <p>
                        En Ciencia de Datos, tengo habilidades en Python, un
                        lenguaje de programación versátil utilizado ampliamente
                        en este campo. Trabajo con bibliotecas como Pandas y
                        NumPy para la manipulación de datos y cálculos
                        numéricos, y Seaborn para la visualización de datos. Mi
                        experiencia se extiende a SQL para la gestión y consulta
                        de bases de datos, y tengo conocimientos en técnicas y
                        algoritmos de aprendizaje automático para construir
                        modelos predictivos y analizar datos.
                    </p>
                    <p>
                        He participado en diversos proyectos personales y
                        profesionales donde he aplicado estas habilidades para
                        ofrecer soluciones impactantes y eficientes.
                    </p>
                </div>
            )}

            <div className="flex justify-center sm:justify-start items-center space-x-4  mt-4  ">
                <Link
                    to="https://linkedin.com/in/abel-pierobon"
                    target="_blank"
                >
                    <img
                        src={linkedin}
                        alt="linkedin"
                        className=" w-8 sm:w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                    />
                </Link>
                <Link to="https://github.com/abel-pierobon" target="_blank">
                    <img
                        src={github}
                        alt="github"
                        className=" w-8 sm:w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                    />
                </Link>
            </div>
        </div>
    );
}
export default About;
