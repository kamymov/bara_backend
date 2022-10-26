import React from 'react';

//styles
import styles from './playBox.module.css'

const PlayBox = ({image, title, description}) => {
    
    return (
        <div className={styles.playBoxContainer }>
            <div className={styles.playBoxImageContainer}>
                <img src={image} alt="playIcons" />
            </div>
            <div className={styles.playBoxTexts}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div> 
        </div>
    );
};

export default PlayBox;