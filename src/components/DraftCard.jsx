import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "./DraftCard.module.scss";
import PlaceholderImage from "../images/prospect-placeholder.png";

class DraftCard extends React.Component {
    state = {
        analysisOpen: false,
    };

    handleAnalysisToggle = () =>
        this.setState({ analysisOpen: !this.state.analysisOpen });

    render() {
        const { analysisOpen } = this.state;
        const nflTotalScore = 8.0;
        return (
            <div className={styles.draftCard}>
                <div className={styles.playerDetails}>
                    <h3 className={styles.playerName}>
                        <span className={styles.playerPosition}>
                            {this.props.position
                                ? this.props.position
                                : "Position"}
                        </span>{" "}
                        {this.props.name ? this.props.name : "Player Name"}
                    </h3>
                    <figure className="player-image">
                        <img
                            src={
                                this.props.image
                                    ? this.props.image
                                    : PlaceholderImage
                            }
                            alt={this.props.name}
                        />
                    </figure>
                </div>
                <div
                    className={`${styles.playerAnalysis} ${
                        analysisOpen ? styles.playerAnalysisActive : ""
                    }`}
                >
                    <button
                        className={styles.playerAnalysisToggle}
                        onClick={this.handleAnalysisToggle}
                    >
                        Player Analysis
                        <KeyboardArrowDownIcon />
                    </button>
                    <blockquote className={styles.playerAnalysisContent}>
                        {this.props.analysis
                            ? this.props.analysis
                            : "Player analysis will be available when a player is selected."}
                        {this.props.citeLink && this.props.citeText && (
                            <a
                                className={styles.playerAnalysisCite}
                                href={this.props.citeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {this.props.citeText}
                            </a>
                        )}
                    </blockquote>
                </div>
                <ul className={styles.playerMeta}>
                    <li className="player-meta--grade">
                        <span className={styles.playerMetaTitle}>
                            NFL Grade
                            <Tooltip
                                title="NFL.com grades their prospects out of 8.0, I normalized the numbers to out of 100 to match other sites."
                                placement="right"
                            >
                                <InfoOutlinedIcon />
                            </Tooltip>
                        </span>
                        {this.props.nflGrade
                            ? Math.ceil(
                                  (this.props.nflGrade / nflTotalScore) * 100
                              )
                            : "--"}
                    </li>
                    <li className="player-meta--grade">
                        <span className={styles.playerMetaTitle}>
                            ESPN Grade
                        </span>
                        {this.props.espnGrade ? this.props.espnGrade : "--"}
                    </li>
                    <li className="player-meta--round">
                        <span className={styles.playerMetaTitle}>Round</span>
                        {this.props.round ? this.props.round : "--"}
                    </li>
                    <li className="player-meta--round-pick">
                        <span className={styles.playerMetaTitle}>
                            Round Pick
                        </span>
                        {this.props.roundPick ? this.props.roundPick : "--"}
                    </li>
                    <li className="player-meta--overall-pick">
                        <span className={styles.playerMetaTitle}>
                            Overall Pick
                        </span>
                        {this.props.overallPick ? this.props.overallPick : "--"}
                    </li>
                    <li className="player-meta--school">
                        <span className={styles.playerMetaTitle}>School</span>
                        {this.props.school ? this.props.school : "--"}
                    </li>
                    <li className="player-meta--height">
                        <span className={styles.playerMetaTitle}>Height</span>{" "}
                        {this.props.height ? this.props.height : "--"}
                    </li>
                    <li className="player-meta--weight">
                        <span className={styles.playerMetaTitle}>Weight</span>
                        {this.props.weight ? `${this.props.weight} lbs` : "--"}
                    </li>
                </ul>
            </div>
        );
    }
}

export default DraftCard;
