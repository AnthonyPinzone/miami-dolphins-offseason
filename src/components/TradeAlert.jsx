import React, { useState } from "react";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import styles from "./TradeAlert.module.scss";

export default function TradeAlert(props) {
    const [isAlertOpen, setAlertOpen] = useState(false);
    const toggleAlert = () => setAlertOpen(!isAlertOpen);

    return (
        <div
            className={`${styles.tradeAlert} ${
                isAlertOpen ? styles.tradeAlertOpen : ""
            }`}
        >
            <button className={styles.tradeAlertToggle} onClick={toggleAlert}>
                {isAlertOpen ? (
                    <HighlightOffOutlinedIcon className={styles.iconWiggle} />
                ) : (
                    <NotificationsActiveOutlinedIcon />
                )}
            </button>
            <h4 className={styles.tradeAlertTitle}>Trade Alert!</h4>{" "}
            <p className={styles.tradeAlertBody}>{props.children}</p>
        </div>
    );
}
