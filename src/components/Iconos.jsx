import React from "react";

function Iconos({ nombre, url }) {
    return (
        <div className="flex justify-center">
            <img src={url} alt={nombre} title={nombre} className="w-10 h-10 border rounded-md m-1 border-gray shadow-lg p-1 hover:border-black" />
        </div>
    );
}

export default Iconos;
