import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from '../../../Menu/menu';
import "./checkScaler.css"

const CheckScaler = () => { 

    const location = useLocation()
    const navigate = useNavigate()
    const matchingId = location.state?.id
    const [data, setData] = useState([])

    useEffect(() => {
        if(!matchingId){
            return navigate('/check-invesment')
        }
        axios.get(`https://api.barainvest.com/scaler/get-scaler/${matchingId}`, {
            headers: { Authorization: `${localStorage.getItem('token')}` }
        }).then(response => {
            setData([...response.data])
        })
    }, [])

    if(data.length != 0){
        var title = data[0].matching.title
    }else{
        var title = 'هیچ گیمری درخواست نداده است'
    }

    console.log(data);


    return <div className="CS_main">

        <Menu />    

        <br/><br/>

        <div className="CS_div_title">
            <h1>{title}</h1>
        </div>

        <div className="CS_div_scalers">
            <ol>
                {data.map((c) => {
                    return <li><div className="CS_div_scaler shadow">
                                <a href={`https://api.barainvest.com/${c.file}`} download>دانلود فایل</a>
                            </div></li>
                })}
            </ol>
        </div>
        
    </div>


}

export default CheckScaler;