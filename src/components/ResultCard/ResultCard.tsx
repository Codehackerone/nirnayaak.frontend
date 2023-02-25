import React from "react";
import styles from "./ResultCard.module.scss";

type resultCardProps = {
  data: any;
};

const ResultCard = (props: resultCardProps) => {
  return (
    <div className={styles.resultCardContainer}>
      <div className={styles.heading}>Case -1</div>
      <div className={styles.summary}>{props.data?.summary}</div>
      <div className={styles.relatedTags}>
        <div className={styles.tagHeading}>Related Tags:</div>

        {props.data?.keywords?.length >= 7 ? (
          <div className={styles.tags}>
            <span>{props.data?.keywords[0]}</span>
            <span>{props.data?.keywords[1]}</span>
            <span>{props.data?.keywords[2]}</span>
            <span>{props.data?.keywords[3]}</span>
            <span>{props.data?.keywords[4]}</span>
            <span>{props.data?.keywords[5]}</span>
            <span>{props.data?.keywords[6]}</span>
            
          </div>
        ) : (
          <div className={styles.tags}>
            {props.data?.keywords.map((keyword: string, index: number) => {
              <span key={index}>{keyword}</span>;
            })}
          </div>
        )}
      </div>
      <button className={styles.button}>View More</button>
    </div>
  );
};

export default ResultCard;