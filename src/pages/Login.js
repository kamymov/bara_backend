import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import styles from './Login.module.css'
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate()
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

  const login = () => {
    axios.post("https://api.barainvest.com/auth/login", userData).then(response => {
      if(!response.data.status){
              if(response.data.status !== 200){
        Swal.fire('ارور', response.data.message, 'error')
      }
      Swal.fire('ورود', 'خوش آمدید', 'success')
      localStorage.setItem('token', response.data.token)
      return navigate('/matching')
      }else{
        new Swal('ارور' , response.data.message , 'error')
      }
    })
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
                    border: '1.5px solid #e801b4',
                    borderRadius: '13px',
                    color: 'white',
                    fontSize: '150%',
                    padding: '2% 10%',
                    width: {xs: '70%', md: '50%'},
                    fontFamily: 'PeydaBlack, Arial, Helvetica, sans-serif',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    ":hover": {
                        border: '1.5px solid #e801b4'
                    }
                }}
                onClick={login}
                >
                  ورود
                </Button>
            </div>
            {/* <h5 className={styles.loginWith}>ثبت نام از طریق</h5> */}
            <div className={styles.iconContainer}>
                <FaDiscord />
                <FaLinkedin />
                <FaInstagram />
                <FaTwitter />
            </div>
            <div className={styles.forgotPassAndLogin}>
                <span className={styles.forgotPass}>فراموشی رمز</span>
                <Link to={"/signup"} className={styles.loginLink}>ثبت نام در دنیای بارا</Link>
            </div>
        </div>
    </div>
  );
  }

export default Login;
