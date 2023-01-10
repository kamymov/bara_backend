import './menu.css';
import Logo from '../assets/IMG_8020 2.jpg';
import Profile from '../assets/noneProfile.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {

    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const correntImage = useState(`https://api.barainvest.com/${Image}`)

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
        axios.get('https://api.barainvest.com/users/get-user-by-id', {
            headers: { Authorization: `${localStorage.getItem('token')}` }
        }).then(response => {
            setImage(response.data.image);
        })
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return <div className="menu">
        <div className='menu_logo_div'>
            <Link to='/'><img src={Logo} className="bara_logo"/></Link>
        </div>

        <div className='menu_div_link'>
            <Link to='/matching' className='menu_link'>صفحه اصلی</Link>
            <Link to='/upload-invesment' className='menu_link'>ایجاد سرمایه گذاری</Link>
            <Link to='/profile' className='menu_link'>پروفایل</Link>
            <Link to='/check-invesment' className='menu_link'>سرمایه گذاری های من</Link>
            <a  className='menu_link' onClick={logout}>خروج</a>
        </div>

        <div className='menu_profile_div'>

            <img src={image ? `https://api.barainvest.com/${image}` : Profile} className='profile_img'/>

        </div>

    </div>

}

export default Menu;