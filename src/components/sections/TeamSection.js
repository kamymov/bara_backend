import React from 'react';

//components
import Member from '../Member'

//MUI
import { Grid } from '@mui/material';

//styles
import styles from './teamSection.module.css'

//image
import kamyabAvatar from '../../assets/kamyab.png'
import parsaAvatar from '../../assets/parsa.png'
import nushinAvatar from '../../assets/nushin.png'
import mohamadAvatar from '../../assets/mohamad.png'
import mehraAvatar from '../../assets/mehra.png'

const members = [
    {
        name: 'Mehra Aflatooni',
        title: 'Product Manager',
        linkedin: '#',
        avatar: mehraAvatar
    },
    {
        name: 'Parsa Abolhasani Rad',
        title: 'Blockchain Developer',
        linkedin: 'https://www.linkedin.com/in/parsa-abolhasani-203b79198/',
        avatar: parsaAvatar
    },
    {
        name: 'Nushin Taheri',
        title: 'Graphic Designer and Content Production',
        linkedin: 'https://www.linkedin.com/in/dsasd/',
        avatar: nushinAvatar
    },
    {
        name: 'Kamyab Movahhedi',
        title: 'Software Engineer',
        linkedin: 'https://www.linkedin.com/in/emad-cheshmazar-b4571524a/',
        avatar: kamyabAvatar
    },
    {
        name: 'Mohammad Seymari',
        title: 'Content Production Supervisor',
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