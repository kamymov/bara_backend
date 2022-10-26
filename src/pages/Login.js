import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from './Login.module.css'
import { Button } from "@mui/material";
import { useState } from "react";

function Login() {

  const [userData, setUserData] = useState({
    number: '',
    password: ''
  })
  const getNumber = (event) => {
    setUserData({...userData, number: event.target.value})
  }
  const getPassword = (event) => {
    setUserData({...userData, password: event.target.value})
  }

  const logger = () => {
    console.log(userData)
  }

  return (
    <div className={styles.signup}>
        <div className={styles.mainContainer}>
            <h2 className={styles.signupHeader}>ورود به دنیای بارا</h2>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input} 
                    type="number" 
                    placeholder="شماره تماس" 
                    onChange={getNumber}
                    value={userData.number}
                />
                <input 
                    className={styles.input} 
                    type="password" 
                    placeholder="رمزعبور"
                    onChange={getPassword}
                    value={userData.password}
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button variant="outlined" sx={{
                    border: '1.5px solid rgba(252,198,1,1)',
                    borderRadius: '13px',
                    color: '#fff',
                    fontSize: '150%',
                    padding: '2% 10%',
                    width: {xs: '70%', md: '50%'},
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    ":hover": {
                        border: '1.5px solid rgba(255,227,126,1)'
                    }
                }}
                onClick={logger}
                >
                  ورود
                </Button>
            </div>
            <h5 className={styles.loginWith}>ثبت نام از طریق</h5>
            <div className={styles.iconContainer}>
                <FaDiscord />
                <FaLinkedin />
                <FaInstagram />
                <FaTwitter />
            </div>
            <div className={styles.forgotPassAndLogin}>
                <span className={styles.forgotPass}>فراموشی رمز</span>
                <a href="./signup" className={styles.loginLink}>ثبت نام در دنیای بارا</a>
            </div>
        </div>
    </div>
  );
  }

export default Login;
