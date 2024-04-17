'use client'
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const modal = modalRef.current;
        if (modal && !modal.open) {
            modal.showModal();
        }
    }, []);

    function onHide() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="custom-dialog bg-dark text-white shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-5 rounded-md dark:bg-opacity-95 w-[70%] invisible-scrollbar"
            role="dialog"
        >
            <span
                onClick={onHide}
                className="sticky top-0 left-0 m-2 cursor-pointer"
                aria-label="Close"
            >
                <Image src="/assets/xmark.svg" alt="close" width={30} height={30} />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    );
};

export default Modal;
