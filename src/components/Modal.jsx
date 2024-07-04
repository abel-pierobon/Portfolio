function Modal({ imagen, closeModal, ingles }) {
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img
                    src={imagen}
                    alt="imagen certificado"
                    className="imgModal border border-[#463eed] rounded-md shadow-lg shadow-[#463eed]  "
                />
            </div>
        </div>
    );
}

export default Modal;

