import React from 'react';
import styles from './member.module.css'
import linkedinIcon from '../assets/linkedin.svg'


const Member = ({name, title, avatar, linkedin}) => {
    return (
        <div className={styles.memberContainer}>
            <div className={styles.avatarContainer}>
                <img src={avatar} alt='team member'/>
            </div>
            <div className={styles.titleContainer}>
                <h3>{name}</h3>
                <span>{title}</span>
            </div>
            <div className={styles.socialContainer}>
                <a href={linkedin} target='_blank'>
                    <img src={linkedinIcon} alt='linkedin icon' />
                </a>
            </div>
        </div>
    );
};

export default Member;