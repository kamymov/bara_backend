import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Swal from 'sweetalert2';

import {Link} from 'react-scroll'

import profile from '../../assets/noneProfile.png';

//MUI
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//icons
import BaraLogo from '../../assets/BARALOGO.png'
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import discord from '../../assets/discord.svg';
import wallet from '../../assets/wallet.png';
import metamask from '../../assets/metamask.svg'

//styles
import styles from './NavBar.module.css'
import axios from 'axios';

const navLinks = [
  {
    name: 'متاورس',
    target: 'metaverseSection',
    navigate: null
  },
  {
    name: 'نقشه راه',
    target: 'roadmapSection',
    navigate: null
  },
  {
    name: 'متاگیم',
    target: 'metagameSection',
    navigate: null
  },
  {
    name: 'تیم',
    target: 'teamSection',
    navigate: null
  },
  {
    name: 'سرمایه گذاران',
    target: 'investorsSection',
    navigate: null
  },
  {
    name: 'همکاران',
    target: 'partnersSection',
    navigate: null
  },
  {
    name: 'اخبار',
    target: null,
    navigate: "https://barainvest.news/"
  },
  {
    name: 'مشاوره',
    target: null,
    navigate: null
  },
]

const socials = [
    {
        logo: instagram,
        link: 'https://www.instagram.com/barainvestcom',
        alt: 'instagram bara'
    },
    {
        logo: twitter,
        link: 'https://twitter.com/barainvest',
        alt: 'twitter bara'
    },
    {
        logo: youtube,
        link: 'https://youtube.com/barainvest',
        alt: 'youtube bara'
    },
    {
        logo: linkedin,
        link: 'https://linkedin.com/barainvest',
        alt: 'linkedin bara'
    },
    {
        logo: discord,
        link: 'https://discord.com/barainvest',
        alt: 'discord bara'
    },
]


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchormenu, setanchormenu] = React.useState(null);
    const [photo , setPhoto] = React.useState('')

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setanchormenu(null)
    };
    const handleMenu = (event) => {
      setanchormenu(event.currentTarget);
    };

    const navigate = useNavigate()
    const navigateToLogin = () => {
      navigate('/login')
    }

    useEffect(() => {
      axios.get('https://api.barainvest.com/users/get-user-by-id', {
        headers: { Authorization: `${localStorage.getItem('token')}` }
      }).then(response => {
        setPhoto(response.data.image)
      })
    }, [])

    async function getMetamaskAccount() {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0]
      return account
    }
    
    const [metamaskAddress, setMetamaskAddress] = useState('')

    const connectMetamask = () => {
      if(typeof window !== 'undefined') {
        getMetamaskAccount().then(response => {
          localStorage.setItem('metamaskAcc', `${response}`)
          setMetamaskAddress(response)
        })
        console.log(metamaskAddress)
      }
    }

    const Logout = () => {
      return navigate('/matching')
    }
    
    return (
        <div className={styles.navBarContainer}>
            <img src={BaraLogo} alt='bara logo' className={styles.logo}/>
            <div className={styles.wallet}>
                <IconButton
                  onClick={handleClick}
                  size="large"
                  sx={{ mr: 1 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 45, height: 45, backgroundColor: 'rgb(230, 230, 230)' }}><img src={wallet} alt='wallet icon' className={styles.walletIcon}/></Avatar>
                </IconButton>
                <Menu
                  anchormenu={anchormenu}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      alignItems: 'start',
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 7,
                      ml:{xs:'-5%' ,md:'-13%'},
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: 2,
                        mr: 1,
                      }
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem>
                    <div onClick={connectMetamask} className={styles.walletItemContainer}>
                      <img src={metamask} alt='metamusk' className={styles.walletItems}/>
                      <span>Metamask</span>
                    </div>
                  </MenuItem>
                </Menu>
            </div>
            <div className={styles.linksContainer}>
                {navLinks.map(link => (
                  !link.navigate
                    ? <Link 
                    key={link.name} className={styles.links}
                    to={link.target} spy={true} smooth={true} offset={-50} duration={900}
                  >
                      {link.name}
                  </Link>
                    : <a href={link.navigate} target='_blank' className={styles.links}>{link.name}</a>
                ))}
            </div>
            <div className={styles.socialContainer}>
                {
                    socials.map((social, index) => (
                        <a href={social.link} target="_blank" key={index}>
                            <img className={styles.social} src={social.logo} alt={social.alt}/>
                        </a>
                    ))
                }
            </div>

            { localStorage.getItem('token') == null ?            
             <Button className={styles.signinBtn} variant="outlined" sx={{
                border: '2px solid #e801b4',
                borderRadius: '13px',
                color: '#fff',
                fontSize: '100%',
                wordSpacing: '1px',
                fontFamily: 'PeydaBold, PeydaBlack ,Arial, Helvetica, sans-serif',
                width: '10%',
                mr:'1%',
                ":hover": {
                    border: '3px solid #e801b4'
                },
                display: {xs: 'none', md: 'flex'}
            }}
            onClick={navigateToLogin}
            >
               ورود | ثبت نام
            </Button> : <img className={styles.profilePhoto} src={localStorage.getItem('token') ? `https://api.barainvest.com/${photo}` : profile} alt='profile photo' onClick={Logout}/>}

            <div className={styles.responsiveMenu}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchormenu={anchormenu}
                anchorOrigin={{
                  vertical: 'botto',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchormenu)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                  }}
                >
                  <Button variant="contained" sx={{
                    width: '100%',
                    mt: '3%',
                    color: 'black',
                    fontFamily: 'PeydaBold, PeydaBlack ,Arial, Helvetica, sans-serif',
                    backgroundColor: '#e801b4'
                  }}
                  onClick={navigateToLogin}
                  >
                    ورود | ثبت نام
                  </Button>
                </MenuItem>
                {
                  navLinks.map(link=> (
                    <MenuItem 
                      key={link.name}
                      onClick={handleClose}
                      sx={{
                        fontFamily: 'PeydaBold, PeydaBlack ,Arial, Helvetica, sans-serif',
                        justifyContent: 'center'
                      }}
                    >
                      {link.name}
                    </MenuItem>
                  ))
                }
              </Menu>
            </div>
        </div>
    );
};

export default NavBar;