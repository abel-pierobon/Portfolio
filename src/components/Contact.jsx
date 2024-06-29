import gmail from "/images/gmail.png";
import whatsapp from "/images/whatsapp.png";
import linkedin from "/images/linkedin.png";
import { Link } from "react-router-dom";
function Contact({ contacto }) {
    return (
        <div
            className="mt-20 p-4 mb-1 w-full flex flex-col text-center justify-center border rounded-r-md shadow-lg"
            ref={contacto}
        >
            <h2 className="text-4xl text-center mb-4 text-[#463eed] font-semibold">
                Contacto
            </h2>
            <div className="flex justify-center hover:border-black mx-6 space-x-6">
                <div className="flex justify-start items-center space-x-2 hover:border-black">
                    <a
                        href="https://wa.me/5493517062293"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={whatsapp}
                            alt="whatsapp"
                            className="w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                        />
                    </a>
                </div>
                <div className="flex items-center space-x-2 hover:border-black">
                    <a
                        href="mailto:nestorabel.pierobon@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={gmail}
                            alt="gmail"
                            className="p-1 w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                        />
                    </a>
                </div>
                <Link to="https://linkedin.com/in/abel-pierobon" target="_blank">
                    <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-10 m-1 shadow-xl shadow-gray-400 rounded-xl hover:transform hover:scale-105 hover:border hover:border-gray-400"
                    />
                </Link>
            </div>
            <p></p>
        </div>
    );
}
export default Contact;
