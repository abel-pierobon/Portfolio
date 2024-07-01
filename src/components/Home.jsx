import Presentacion from "./Presentacion";
import About from "./About";
function Home({ home,ingles }) {
    return (
        <div
            ref={home}
            className="border rounded-lg p-4 shadow-2xl mt-20 bg-white 2xl:mx-56"
        >
            <Presentacion ingles={ingles} />
            <About ingles={ingles} />
        </div>
    );
}
export default Home;
