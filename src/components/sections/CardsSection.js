import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

//components

//styles 
import styles from './cardsSection.module.css';

//images
import millionA from '../../assets/million-2.png'
import millionB from '../../assets/million-4.png'
import millionC from '../../assets/million-1.png'
import cardsBGIcon from '../../assets/million-side-bg.png'
import Card from '../Card';


const cardsData = {
    card1: {
        span1: "14",
        span2: '',
        h2: "نفر اسکالر فعال",
        image: millionA
    },
    card2: {
        span1: "$14",
        span2: "k",
        h2: 'سرمایه گذاری در متاگیم',
        image: millionB
    },
    card3: {
        span1: '5',
        span2: "",
        h2: 'بازی فعال متاگیمی',
        image: millionC
    }
}

const CardsSection = () => {
    return (
        <div className={styles.cards}>
            <Container>
                <Grid 
                    container
                    justifyContent='center'
                    spacing={{xs: 1, md: 4}}
                    rowSpacing={10}
                    mt
                >
                    <Grid item lg={4} md={4} sm={6} xs={10}>
                        <Card data={cardsData.card1}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={10}>
                        <Card data={cardsData.card2}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={10}>
                        <Card data={cardsData.card3}/>
                    </Grid>
                </Grid>
                <img className={styles.cardBGIcon} src={cardsBGIcon} alt='background'/>
            </Container>
        </div>
    );
};

export default CardsSection;