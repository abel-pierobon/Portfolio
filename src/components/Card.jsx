function Card({ contenido }) {
    return (
        <div >
            <p className=" items-center text-sm text-wrap text-ellipsis overscroll-auto mt-2">
                {contenido}
            </p>
        </div>
    );
}
export default Card;
