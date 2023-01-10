import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Menu from '../../../Menu/menu';
import './checkInvesment.css'

const CheckInvesment = () => {

    const navigate = useNavigate()
    const [matching, setMatching] = useState([])

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
        axios.get('https://api.barainvest.com/matching/', {
            headers: { Authorization: `${localStorage.getItem('token')}` }
        }).then(response => {
            setMatching([...response.data])
        })
    }, [])

    return <div className="CI_main">

        <Menu />

        <div className='CI_invesment'>

            <br/><br/>

            {matching.map(c => {

                return  <Link to="/check-scaler" state={{id: c.id}} className="CI_Link"><div className='CI_invesments'>
                            <h1>{c.title}</h1>
                        </div></Link>

            })}

            <br/><br/>

        </div>
    
    </div>


}

export default CheckInvesment;