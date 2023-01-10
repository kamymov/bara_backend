import React from 'react';

//MUI
import { Button } from '@mui/material';

//image
import playBG from '../../assets/play-game-bg.png'

//styles
import styles from './videoSection.module.css'

//videos 
import vid1 from '../../assets/thetanarena.mp4'
import vid2 from '../../assets/AxieInfinity.mp4'
import vid3 from '../../assets/godsunchained.mp4'
import vid4 from '../../assets/Decentraland.mp4'
import vid5 from '../../assets/WidiLand.mp4'

const VideoSection = () => {
    return (
        <div className={styles.playContainer}>
            <img src={playBG} alt='play background' className={styles.image}/>
            <div className={styles.playTitle}>
                <h2>بازی کنید  |  یاد بگیرید، درآمد دلاری داشته باشید</h2>
            </div>
            <div className={styles.videoContainer}>
                <video width='100%' height='100%' loop autoPlay muted className={`${styles.video1} ${styles.video}`}>
                    <source src={vid1} type='video/mp4'/>
                </video>
                <video width='100%' height='100%' loop autoPlay muted className={`${styles.video2} ${styles.video}`}>
                    <source src={vid2} type='video/mp4'/>
                </video>
                <video width='100%' height='100%' loop autoPlay muted className={`${styles.video3} ${styles.video}`}>
                    <source src={vid3} type='video/mp4'/>
                </video>
                <video width='100%' height='100%' loop autoPlay muted className={`${styles.video4} ${styles.video}`}>
                    <source src={vid4} type='video/mp4'/>
                </video>
                <video width='100%' height='100%' loop autoPlay muted className={`${styles.video5} ${styles.video}`}>
                    <source src={vid5} type='video/mp4'/>
                </video>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={styles.containedButton} variant="contained" sx={{
                    borderRadius: '13px',
                    color: 'white',
                    fontSize: '80%',
                    width: '100%',
                    padding: '7px 25px',
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif'
                }}>
                    بازی کنید
                </Button>
            </div>
        </div>
    );
};

export default VideoSection;