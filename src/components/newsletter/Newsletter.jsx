import { useEffect, useRef, useState } from "react";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import styles from "./newsletter.module.css"

const Newsletter = () => {
    const [inputValue, setinputValue] = useState("");

    const dialog = useRef()
    const inputRef = useRef();


    const handleInputChange = (event) => {
        setinputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dialog.current.showModal();
    };

    useEffect(() => {
        inputRef.current.focus();
    });


    return (
        <section>
            <Modal ref={dialog} email={inputValue}/>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label>Din email:</label>
            <input 
            type='email' value={inputValue} ref={inputRef} onChange={handleInputChange} required/>
            
            <Button type='submit' title='Tilmed' />
            </form>

        </section>
    );
};

export default Newsletter;