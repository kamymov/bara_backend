import React from 'react';

//styles
import styles from './card.module.css'

const Card = ({data}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={data.image} alt={data.h2}/>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.fristSpan}>{data.span1}</span>
                <span className={styles.secondSpan}>{data.span2}</span>
                <div className={styles.title}>
                    <h2>{data.h2}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;