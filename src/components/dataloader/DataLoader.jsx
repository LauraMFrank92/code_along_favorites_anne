import React from "react";
import styles from "./dataLoader.module.css"

function DataLoader() {

    return (
        <div className={styles.parentLoader}>
        <div className={styles.loader}></div>
        </div>
    );
}

export default DataLoader;