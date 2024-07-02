import { Link } from "react-router-dom";
import github from "/images/github.png";
import linkedin from "/images/linkedin.png";
import idioma from "../components/idioma.json";

function About({ ingles }) {
    return (
        <div className="  sm:mx-0 sm:my-8  lg:mx-12 flex flex-col justify-center  bg-##dbdfea  text-xs md:text-xl ">
            {ingles ? (
                <p>
                    {idioma.about.description}
                </p>
            ) : (
                <p>
                Soy un desarrollador web autodidacta y entusiasta, con formación
                en React JS, React Native, Vue Js, Data Science y Data
                Analytics. Me apasiona crear aplicaciones web dinámicas e
                interactivas, utilizando las mejores prácticas del desarrollo
                web y aprovechando el poder de los datos. He participado en
                diversos proyectos personales y profesionales, donde he aplicado
                mis habilidades en HTML, CSS, JavaScript, Bootstrap, Tailwind
                CSS, GIT, SASS, AJAX, Seaborn y SQL.
            </p>
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
