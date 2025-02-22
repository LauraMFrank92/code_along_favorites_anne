import { forwardRef } from "react";
import { Form } from "react-router-dom";
import Button from "../button/Button";


const Modal = forwardRef(function Modal({ email }, ref) {

    return (
        <dialog ref={ref}>
            <h2>Du er nu tilmeldt nyhedsbrevet med emailen: {email}</h2>
            <form method="dialog"> 
                <Button title="Luk">luk</Button>
            </form>
        </dialog>
    )

});

export default Modal;