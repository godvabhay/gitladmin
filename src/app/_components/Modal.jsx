'use client';
import { useEffect, useState } from "react";

function Modal({ shouldShow, onRequestClose, title, children, }) {
    return (<>
        <dialog id="my_modal_3" className={`modal ${shouldShow ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onRequestClose}>✕</button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                {children}
            </div>
        </dialog>
    </>);
}

export default Modal;