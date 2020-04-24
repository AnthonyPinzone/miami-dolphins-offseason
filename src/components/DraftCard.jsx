import React from "react";
import TradeAlert from "./TradeAlert";
import PlayerAnalysis from "./PlayerAnalysis";
import PlayerDetails from "./PlayerDetails";
import PlayerMeta from "./PlayerMeta";
import styles from "./DraftCard.module.scss";

export default function DraftCard(props) {
    return (
        <div className={styles.draftCard}>
            {props.trade && <TradeAlert {...props.trade} />}

            <PlayerDetails {...props.details} />

            <PlayerAnalysis
                id={`${props.round}${props.roundPick}${props.overallPick}`}
                {...props.analysis}
            />

            <PlayerMeta {...props.meta} />
        </div>
    );
}
