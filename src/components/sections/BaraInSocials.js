import React from 'react';

//MUI
import { Grid } from '@mui/material';

//styles
import styles from './baraInSocials.module.css'

//images
import newsImage from '../../assets/image-customer.png'

const BaraInSocials = () => {
    return (
        <div className={styles.baraInSocials}>
            <Grid container justifyContent='center'>
                    <Grid item xs={10} md={6}>
                        <div className={styles.newsTitle}>
                            <h2>بارا در فضای مجازی</h2>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={8}>
                        <div className={styles.newsImage}>
                            <img className={styles.currentImage} src={newsImage} alt='newsImage'/>
                        </div>
                    </Grid>
                </Grid>
        </div>
    );
};

export default BaraInSocials;