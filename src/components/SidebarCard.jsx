import React from "react";
import styles from "./SidebarCard.module.scss";

function SidebarCard(props) {
    console.log(props);
    return (
        <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarCardTitle}>{props.title}</h3>
            <ul className={styles.sidebarCardList}>
                {props.players.map((player) => (
                    <li
                        key={player.name}
                    >{`${player.name}, ${player.position}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarCard;
