import React from 'react';

//MUI
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

//images
import paradisehub from '../../assets/paradisehub.png'
import qstp from '../../assets/qstp.png'
import zavie from '../../assets/zavie.svg'
import stech from '../../assets/stech.png'

//styles
import styles from './partnersSection.module.css'


const partners = [
    {
        logo: paradisehub,
        link: 'https://paradisehub.ir/',
        name: "پارادایس هاب"
    },
    {
        logo: zavie,
        link: 'https://zavie.co/',
        name: "شرکت خدمات انفورماتیک"
    },
    {
        logo: qstp,
        link: 'https://qstp.ir/',
        name: "آی فینک"
    },
    {
        logo: stech,
        link: 'https://www.syntechcenter.ir/',
        name: "سینتک"
    }
]

const PartnersSection = () => {
    return (
        <div className={styles.partnersContainer}>
            <h2 className={styles.partnersTitle}>
                همکاران
            </h2>
            <div className={styles.logoContainer}>
                <Grid container justifyContent='center'>
                        {
                            partners.map((partner, index) => (
                                <Grid item xs={6} sm={2}>
                                    <a href={partner.link} key={index} target='_blank' className={styles.logoBox}>
                                        <img src={partner.logo} alt={partner.name} className={styles.logo}/>
                                    </a>
                                </Grid>
                            ))
                        }
                </Grid>
            </div>
+        </div>
    );
};

export default PartnersSection;