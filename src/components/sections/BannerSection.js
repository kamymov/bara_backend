import { Grid } from '@mui/material';
import React from 'react';

//image
import banner from '../../assets/sample-banner.png'

//styles
import styles from './bannerSection.module.css'


const BannerSection = () => {
    return (
        <div className={styles.banner}>
            <h1>به سمت بیکران و فراتر از آن</h1>
                <Grid 
                    container
                    justifyContent='center'
                >
                    <Grid item xs={10} md={6.5}>
                        <img src={banner} alt="bara banner"/>
                    </Grid>
                </Grid>
        </div>
    );
};

export default BannerSection;