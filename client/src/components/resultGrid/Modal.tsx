import { modal } from "../../style";

import './Modal.css'

interface ModalProps {
    image: any;
    description: string;
    title: string;
    toggle: () => void;
}

function Modal({ image, description, title, toggle }: ModalProps) {
    return (
        <div className="modal ">
            <div className="modal-overlay"></div>
            <div className={`modal-content ${modal.container}`}>
                <div className="modal-header">
                    <button className={modal.btn} onClick={toggle}>Close</button>
                </div>
                <div className={`modal-body ${modal.body}`}>
                    <img
                        src={`data:image/png;base64, ${image}`}
                        alt={title}
                        className='relative z-1 object-contain h-96 w-full p-2'
                    />
                        <h2 className={modal.header}>{title}</h2>
                        <p className="w-full h-5">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;