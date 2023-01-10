import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  "./mainPage.css";
const MainMatching = () => {

    const navigate = useNavigate()
    const [Invesment, setInvesment] = useState([])
    const [CopyInvesment, setCopyInvesment] = useState([])

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
            axios.get("https://api.barainvest.com/matching/get_invesment ", {headers: {
                Authorization: `${localStorage.getItem('token')}`
            }}).then(response => {
                response.data.map((c) => {
                    let invesment = c
                    const invesments = Invesment;
                    invesments.push(invesment);
                    setInvesment(invesments)
                    setCopyInvesment(invesments)
                })
            })
    }, [])

    const searchChange = (e) => {
        let invesment = CopyInvesment;
        let invesments = invesment.filter((f) => {
            return f.includes(e.target.value)
        })
        setInvesment(invesments)
    }

    return (
        <div className="main">

            <button onClick={() => navigate('/invesment/request')} className="upload_btn">آپلود سرمایه گذاری</button>

            <div className="search">
 
                <input type="text" placeholder="پیدا کردن سرمایه گذاری..." className="input_search" onChange={searchChange}/>

            </div>

            <h1 className="title">سرمایه گذاری های فعال</h1>

            <div className="invesments">
  
                {
                    Invesment.map((c) => {
                        return <Link to="/details" state={{ id: c.id }}>
                                    <div className="invesment" key={c.id}>
                                        <div className="iinvesment_title_div">
                                            <span className="iinvesment_title">{c.title}</span>
                                        </div>
                                        <div className="invesment_type_div">
                                            <span className="invesment_type">{c.investment_type}</span>
                                        </div>
                                    </div>
                                </Link>
                    })
                }
            </div>


        </div>
      );

}

export default MainMatching;