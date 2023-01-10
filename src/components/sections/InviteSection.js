import React from 'react';

//MUI
import { Button } from '@mui/material';

//styles 
import styles from './inviteSection.module.css'

const InviteSection = () => {
    return (
        <div className={styles.invite}>
            <div className={styles.inviteTitle}>
                <span>کسب درآمد دلاری از طریق بازی های ویدئویی بلاکچینی</span>
                <h2>از دوستانتان دعوت کنید برای کسب درآمد دلاری</h2>
                <div className={styles.pContainer}>
                    <p>استارت آپ بارا در حوزه پرداخت های مالی غیر متمرکز در متاوررس &#40;defi metaverse&#41; فعالیت می کند که به صورت تخصصی روی بازی های بلاکچینی متاورس &#40;play to earn&#41; تمرکز دارد. شما می توانید به صورت اسکالر اکانت های متعدد متاگیمی اجاره کنید و کسب درآمد دلاری داشته باشید</p>
                    <p>همچنین می توانید درآمد خودرا به صورت ریالی و یا دلاری از طریق شبکه شتاب یا قراردادهای هوشمند غیرمتمرکز &#40;smart contract&#41; دریافت کنید</p>
                </div>
            </div>
            <div className={styles.inviteButtons}>
                <Button className={styles.inviteButton} size='large' variant="contained" sx={{
                    color: 'black',
                    background: 'linear-gradient(90deg, rgba(255,227,126,1) 0%, rgba(254,213,66,1) 35%, #e801b4 100%)',
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                    height: {sm: "500px"}
                }}>
                    دعوت به بارا
                </Button>
                <Button className={styles.demoButton} size='large' variant="outlined" sx={{
                    border: '1.5px solid #e801b4',
                    color: '#fff',
                    opacity: '0.8',
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif'
                }}>
                    چارت اکانت ها
                </Button>
            </div>
        </div>
    );
};

export default InviteSection;