import './ModalWindowStyle.css';
import {useEffect, useRef, useState} from "react";

function Modal({visible, close, children}) {

    if (visible) {
        return (
            <>
                <div className="modal_main">
                    {children}
                </div>
                <div id="modal_login" onClick={close}/>
            </>
        )
    } else {
        return null;
    }
}

export default Modal;