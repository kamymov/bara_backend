import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from './signup.module.css'
import { Button } from "@mui/material";
import * as Swal from 'sweetalert2'



function Signup() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    number: '',
    password: '',
    code: ''
  })

  const [smsCode, setSmsCode] = useState(false)

  const getNumber = (event) => {
    setUserData({...userData, number: event.target.value})
  }

  const getCode = (event) => {
    setUserData({...userData, code: event.target.value})
  }

  const getPassword = (event) => {
    setUserData({...userData, password: event.target.value})
  }

  const getSms = () => {
    axios.post("https://api.barainvest.com/auth/send_code", userData).then((response) => {
            if(response.status == 201){
                Swal.fire(
                    'کد تایید',
                    'کد تایید برای شما ارسال شد',
                    'success'
                  )
                  setSmsCode(true);
            }
    }).catch((err) => {
        Swal.fire(
            'ناموفق',
            err.response.data.message,
            'error'
        )
    })
  }

  const signUp = () => {
    axios.post("https://api.barainvest.com/auth/sign-up", userData).then((response) => {
        if(!response.data.status){
                new Swal.fire('موفق', 'ثبت نام شما موفقیت آمیز بود', 'success')
                localStorage.setItem('token', response.data.token)
                return navigate('/matching')
        }else{
            new Swal('ارور', response.data.message, 'error')
        }
    }).catch((err) => {
        Swal.fire(
            'ناموفق',
            err.response.data.message,
            'error'
        )
    })
  }

  return (
    <div className={styles.signup}>
        <div className={styles.mainContainer}>
            <h2 className={styles.signupHeader}>ثبت نام در دنیای بارا</h2>
            {
                <div className={smsCode ? styles.inputsContainer : styles.telContainer}>
                    <input
                        className={styles.input} 
                        type="text" 
                        placeholder="شماره تماس" 
                        onChange={getNumber}
                        value={userData.number}
                    />
                                      <input
                        className={smsCode ? styles.sms : styles.hideSms} 
                        type="number" 
                        placeholder="_ _ _ _" 
                        onChange={getCode}
                        value={userData.code}
                    />
                    <input
                        className={smsCode ? styles.pass : styles.hidePass} 
                        type="password" 
                        placeholder="انتخاب رمز عبور" 
                        onChange={getPassword}
                        value={userData.password}
                    />
  
                </div>
            }
            <div className={styles.buttonContainer}>
                <Button variant="outlined" sx={{
                    border: '1.5px solid #e801b4',
                    borderRadius: '13px',
                    color: '#fff',
                    fontSize: '140%',
                    height: '100%',
                    width: {xs: '70%', md: '50%'},
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    ":hover": {
                        border: '1.5px solid #e801b4'
                    }
                }}
                onClick={smsCode ? signUp : getSms}
                >
                    {smsCode ? 'ثبت نام' : 'ارسال کد'}
                </Button>
            </div>
            <div className={styles.linksContainer}>
                {/* <h5 className={styles.loginWith}>ثبت نام از طریق</h5> */}
                <div className={styles.iconContainer}>
                    <FaDiscord />
                    <FaLinkedin />
                    <FaInstagram />
                    <FaTwitter />
                </div>
                <div className={styles.forgotPassAndLogin}>
                    <Link to={"/login"} className={styles.loginLink}>ورود به دنیای بارا</Link>
                </div>
            </div>
        </div>
    </div>
  );
  }

export default Signup;
