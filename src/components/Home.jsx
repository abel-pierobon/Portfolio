import Presentacion from "./Presentacion";
import About from "./About";
import Lenguajes from "./lenguajes";
function Home({ home,ingles, handleHome }) {
    return (
        <div
            ref={home}
            className="border rounded-lg p-2 md:p-4 shadow-2xl mt-10 md:mt-20 bg-white 2xl:mx-56"
        >
            <Presentacion ingles={ingles} />
            <About ingles={ingles} handleHome={handleHome} />
            <Lenguajes/>
        </div>
    );
}
export default Home;
