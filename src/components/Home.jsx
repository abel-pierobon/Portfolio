import Presentacion from "./Presentacion";
import About from "./About";
function Home({ home }) {
    return (
        <div
            ref={home}
            className="border rounded-lg p-4 shadow-2xl mt-10 bg-white"
        >
            <Presentacion />
            <About />
        </div>
    );
}
export default Home;
