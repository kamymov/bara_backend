import React from 'react';

// MUI
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

//Images
import hamava from '../../assets/hamava.png'
import ifinc from '../../assets/ifinc.png'
import informService from '../../assets/informService.png'

//styles
import styles from './investorsSection.module.css'


const investors = [
    {
        logo: hamava,
        link: 'https://www.hamava.ir',
        name: "هم آوا"
    },
    {
        logo: informService,
        link: 'https://www.isc.co.ir/',
        name: "شرکت خدمات انفورماتیک"
    },
    {
        logo: ifinc,
        link: 'https://www.ifinc.ir',
        name: "آی فینک"
    }
]

const InvestorsSection = () => {
    return (
        <div className={styles.investorsContainer}>
            <h2 className={styles.investorsTitle}>
                سرمایه گذاران
            </h2>
            <Container>
                <Grid container justifyContent='center'>
                    <div className={styles.logoContainer} >
                        {
                            investors.map((partner, index) => (
                                    <a href={partner.link} key={index} target='_blank'>
                                        <img src={partner.logo} alt={partner.name} className={styles.logo}/>
                                    </a>
                            ))
                        }
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default InvestorsSection;