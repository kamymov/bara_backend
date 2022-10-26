import React from 'react';

//styles
import styles from './zoneCard.module.css'

const ZoneCard = ({image, title, date}) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img src={image} alt='zone icon'/>
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default ZoneCard;