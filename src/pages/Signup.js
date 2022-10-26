import React, { useState } from 'react';
import axios from "axios";
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from './signup.module.css'
import { Button } from "@mui/material";



function Signup() {

  const [userData, setUserData] = useState({
    number: '',
    password: '',
  })

  const [smsCode, setSmsCode] = useState('')

  const getNumber = (event) => {
    setUserData({...userData, number: event.target.value})
    console.log('its working')
  }

  const getPassword = (event) => {
    setUserData({...userData, password: event.target.value})
  }

  const getSms = () => {
    console.log(userData)
    setSmsCode('123')
  }

  return (
    <div className={styles.signup}>
        <div className={styles.mainContainer}>
            <h2 className={styles.signupHeader}>ثبت نام در دنیای بارا</h2>
            {
                <div className={smsCode ? styles.inputsContainer : styles.telContainer}>
                    <input
                        className={styles.input} 
                        type="number" 
                        placeholder="شماره تماس" 
                        onChange={getNumber}
                        value={userData.number}
                    />
                    <input
                        className={smsCode ? styles.pass : styles.hidePass} 
                        type="password" 
                        placeholder="انتخاب رمز عبور" 
                        onChange={getPassword}
                        value={userData.password}
                    />
                    <input
                        className={smsCode ? styles.sms : styles.hideSms} 
                        type="number" 
                        placeholder="_ _ _ _" 
                        onChange={getSms}
                        value={smsCode}
                    />
                </div>
            }
            <div className={styles.buttonContainer}>
                <Button variant="outlined" sx={{
                    border: '1.5px solid rgba(252,198,1,1)',
                    borderRadius: '13px',
                    color: '#fff',
                    fontSize: '140%',
                    height: '100%',
                    width: {xs: '70%', md: '50%'},
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    ":hover": {
                        border: '1.5px solid rgba(255,227,126,1)'
                    }
                }}
                onClick={getSms}
                >
                    ارسال کد
                </Button>
            </div>
            <div className={styles.linksContainer}>
                <h5 className={styles.loginWith}>ثبت نام از طریق</h5>
                <div className={styles.iconContainer}>
                    <FaDiscord />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaTwitter />
                </div>
                <div className={styles.forgotPassAndLogin}>
                    <a href="./login" className={styles.loginLink}>ورود به دنیای بارا</a>
                </div>
            </div>
        </div>
    </div>
  );
  }

export default Signup;
