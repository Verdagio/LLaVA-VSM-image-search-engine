import { useState } from "react";
import Modal from "./Modal";

interface GridItemProps {
    image: any;
    description: string;
    title: string;
}

function GridItem({ image, description, title }: GridItemProps) {

    const [showModal, setShowModal] = useState(false);

    const toggle = () => {
        setShowModal(!showModal);
    }

    const img = new Image();
    img.src = `data:image/jpeg;base64,${window.atob(image)}`;

    const formattedDesc = description.length > 100 ? description.slice(0, 100) + "...": description;

    return (
        <>
            <div
                className="bg-slate-900 shadow-xl relative rounded-lg text-center overflow-hidden h-96 w-80 mx-auto p-4 cursor-pointer"
                onClick={toggle}
            >
                <img
                    src={`data:image/png;base64, ${image}`}
                    alt={title}
                    className='relative z-1 rounded-md object-contain h-48 w-full'
                />
                <div className="bg-slate-700 rounded p-2 m-2">
                    <h2 className='text-lg font-bold color-slate-800'>{title}</h2>
                    <div className="overflow-hidden">{formattedDesc}</div>
                </div>

            </div>
            {showModal && <Modal image={image} description={description} title={title} toggle={toggle} />}
        </>
    );
}

export default GridItem;
