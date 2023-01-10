import './matching.css';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Matching = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const id = location.state?.id;
    const [invesment, setInvesment] = useState({})

    useEffect(() => {
        if(!id){
            navigate('/matching')
        }
        axios.get(`https://api.barainvest.com/matching/get_invesment_by_id/${id}`,  {headers: {
            Authorization: `${localStorage.getItem('token')}`
        }}).then(response => {
            setInvesment(response.data)
        })
    }, [])

    const invesmentFile = `https://api.barainvest.com/${invesment.file}`;

    return (
        <div className="main2">
            <br />
            <div className='title_div'>
                <h1 className='title2'>{invesment.title}</h1>
            </div>

            <div className='img_details_div'>
                <img src={invesmentFile} alt='فایل آپلودی از نوع عکس نیست برای دانلود کلیک کنید' className='img_details'/>
            </div>

            <Link to="/request" state={ {id} }><input type="button" value="ثبت درخواست" className='submit_btn'/></Link>

            <br />

        </div>
    )


}

export default Matching;