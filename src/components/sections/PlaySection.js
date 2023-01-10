import React from 'react';

//components
import PlayBox from '../PlayBox';

//image 
import playImage from '../../assets/how-to-play-image.png'
import play1 from '../../assets/play-ic-1.png'
import play2 from '../../assets/play-ic-2.png'
import play3 from '../../assets/play-ic-3.png'
import play4 from '../../assets/play-ic-4.png'

//styles
import styles from './playSection.module.css'

//MUI
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';


const playBoxData = [
    {
        image: play1,
        title: "اتصال کیف پول",
        description: "کیف پول خود را برای واریز و برداشت به سایت متصل کنید"
    },
    {
        image: play3,
        title: "انتخاب نوع بازی",
        description: 'متاگیم مورد نظر خودتون رو انتخاب کنید'
    },
    {
        image: play4,
        title: "انتخاب همکار",
        description: "اسکالر و یا سرمایه گذار مورد نظر خود را انتخاب کنید"
    },
    {
        image: play2,
        title: "قرارداد هوشمند غیر متمرکز",
        description: " نوع قرار داد خود را انتخاب کنید"
    }
]  

const PlaySection = () => {
    return (
        <div className={styles.playContainer}>
            <div className={styles.playTitle}>
                <h2>
                    رایگان بازی کنید | درآمده دلاری داشته باشید    
                </h2>
                <p>
                    خود و دوستانتان را به چالش بکشید و وارد بازی های متاگیمی شوید
                </p>
            </div>
            <div className={styles.howToPlay}>
                <Container>
                    <Grid container justifyContent="center">
                        <Grid item xs={7} sm={5} md={4}>
                            <img className={styles.imageContainer} src={playImage} alt="بازی بارا"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <div className={styles.playData}>
                                <Grid 
                                    container 
                                    spacing={2}
                                    rowSpacing={3}
                                    justifyContent='center'
                                >
                                    {playBoxData.map((box, index) => (
                                            <Grid item xs={11} sm={11} md={6} key={index}>
                                                <div className={styles.boxContainer}>
                                                    <PlayBox
                                                        image={box.image}
                                                        title={box.title}
                                                        description={box.description}
                                                    />
                                                </div>
                                            </Grid>
                                    ))}
                                </Grid>
                                <Grid container spacing={2}justifyContent="center" sx={{
                                    ml: '10px',
                                    mt: '1%'
                                }}>
                                    <Grid item xs={10} md={6}>
                                        <Button className={styles.containedButton} variant="contained" sx={{
                                            borderRadius: '13px',
                                            color: 'white',
                                            fontSize: '120%',
                                            padding: '4% 15%',
                                            width: '90%',
                                            mr: {md:'10%', xs: '3%'},
                                            fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif'
                                        }}>
                                            ورود اسکالر
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10} md={6}>
                                        <Button className={styles.outlineButton} variant="outlined" sx={{
                                            border: '1.5px solid #e802b4',
                                            borderRadius: '13px',
                                            color: '#fff',
                                            fontSize: '120%',
                                            padding: '4% 15%',
                                            width: '90%',
                                            mr: {md:'10%', xs: '3%'},
                                            fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                                            // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                            ":hover": {
                                                border: '1.5px solid #900d9f'
                                            }
                                        }}>
                                            ورود سرمایه گذار
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default PlaySection;