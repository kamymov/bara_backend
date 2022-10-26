import React from 'react';
import NavBar from '../components/sections/NavBar';

//styles
import styles from './home.module.css'

//sections components
import BannerSection from '../components/sections/BannerSection';
import CardsSection from '../components/sections/CardsSection';
import PlaySection from '../components/sections/PlaySection';
import BaraInSocials from '../components/sections/BaraInSocials';
import InviteSection from '../components/sections/InviteSection';
import ZoneSection from '../components/sections/ZoneSection';
import VideoSection from '../components/sections/VideoSection';
import TeamSection from '../components/sections/TeamSection';
import InvestorsSection from '../components/sections/InvestorsSection';
import PartnersSection from '../components/sections/PartnersSection';


const Home = () => {  
    return (
        <div>
            <NavBar/>
            <section className={styles.bannerSection}>
                <BannerSection />
            </section>
            <section className={styles.cardsSection}>
                <CardsSection />
            </section>
            <section className={styles.playSection} id='metaverseSection'>
                <PlaySection />
            </section>         
            <section className={styles.baraInSocialsSection}>
                <BaraInSocials />
            </section>
            <section className={styles.inviteSection}>
                <InviteSection />
            </section>
            <section className={styles.zoneSection} id="roadmapSection">
                <ZoneSection />
            </section>
            <section className={styles.videoSection} id="metagameSection">
                <VideoSection />
            </section>
            <section className={styles.teamSection} id='teamSection'>
                <TeamSection />
            </section>
            {/* <section className={styles.lastNews}>
                <LastNews />
            </section> */}
            <section className={styles.investorsSection} id='investorsSection'>
                <InvestorsSection />
            </section>
            <section className={styles.partnersSection} id='partnersSection'>
                <PartnersSection />
            </section>
        </div>
    );
};

export default Home;


