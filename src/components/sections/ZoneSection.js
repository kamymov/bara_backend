import React from 'react';

//components
import Zone from '../Zone';

//styles
import styles from './zoneSection.module.css'

const ZoneSection = () => {
    return (
        <div className={styles.zoneContainer}>
            <div className={styles.zoneTitle}>
                <h2>نقشه راه بارا</h2>
            </div>
            <Zone />
        </div>
    );
};

export default ZoneSection;