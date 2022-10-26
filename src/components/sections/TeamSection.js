import React from 'react';

//components
import Member from '../Member'

//MUI
import { Grid } from '@mui/material';

//styles
import styles from './teamSection.module.css'

//image
import emadAvatar from '../../assets/emad.png'
import parsaAvatar from '../../assets/parsa.png'
import mohadeseAvatar from '../../assets/mohadese.png'
import mohamadAvatar from '../../assets/mohamad.png'
import mehraAvatar from '../../assets/mehra.png'

const members = [
    {
        name: 'مهرا افلاطونی',
        title: 'مدیر محصول',
        linkedin: '#',
        avatar: mehraAvatar
    },
    {
        name: 'پارسا ابوالحسنی راد',
        title: 'سرپرست تیم',
        linkedin: 'https://www.linkedin.com/in/parsa-abolhasani-203b79198/',
        avatar: parsaAvatar
    },
    {
        name: 'محدثه افسر',
        title: 'گرافیست',
        linkedin: 'https://www.linkedin.com/in/mohadese-afsar/',
        avatar: mohadeseAvatar
    },
    {
        name: 'عماد چشم آذر',
        title: 'برنامه نویس',
        linkedin: 'https://www.linkedin.com/in/emad-cheshmazar-b4571524a/',
        avatar: emadAvatar
    },
    {
        name: 'محمد سیمری',
        title: 'سرپرست تولید محتوا',
        linkedin: '#',
        avatar: mohamadAvatar
    },


]

const TeamSection = () => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                    تیم بارا
                </h2>
            </div>
            <div className={styles.membersContainer}>
                <Grid container justifyContent='center' alignItems='center'>
                    {
                        members.map((member, index) => (
                            <Grid item md={4} xs={6} key={index}>
                                <div className={styles.member}>
                                    <Member 
                                        name={member.name}
                                        title={member.title}
                                        linkedin={member.linkedin}
                                        avatar={member.avatar}
                                    />
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
};

export default TeamSection;