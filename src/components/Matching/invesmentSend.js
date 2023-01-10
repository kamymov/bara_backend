import "./invesmentSend.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./sendRequest.css"
import * as Swal from 'sweetalert2';


const InvesmentSend = () => {

 
    const navigate = useNavigate();
    const location = useLocation();
    const [invesmentType, setInvesmentType] = useState('');
    const [title, setTitle] = useState('')
    const [file, setFile] = useState({})

    const handleChangeFile = async (e) => {
        let File = e.target.files[0]
        setFile({file: File})
    }

    const setInvesmentTypeFunc = (e) => {
        setInvesmentType(e.target.value)
    }

    const setTitleFunc = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    }, [])

    const sendRequest = () => {
        const formData = new FormData();
        formData.append('invesmentType', invesmentType)
        formData.append('title', title)
        formData.append('file', file.file)
        axios.post('https://api.barainvest.com/matching/create_invesment', formData, {
            headers: { 'Content-Type': 'multipart/form-data', Authorization: `${localStorage.getItem('token')}`  }
        }).then(response => {
            if(response.status === 201){
                Swal.fire('موفق', 'درخواست شما با موفقیت ثبت شد', 'success')
                return navigate("/matching")
            }
            Swal.fire('ناموفق', 'درخواست شما با خطا مواجه شد لطفا بعدا مجدد تلاش کنید', 'error')
            return navigate("/matching")
        }).catch(err => {
            Swal.fire('ناموفق', 'درخواست شما با خطا مواجه شد لطفا بعدا مجدد تلاش کنید', 'error')
            return navigate("/matching")
        })
    }

    return <div className="InvesmentPage">
                <br/>
                <h1 className="InvesmentH1">آپلود سرمایه گذاری</h1>

                <input type="text" placeholder="نوع سرمایه گذاری..." className="content_input" onChange={setInvesmentTypeFunc}/>
                
                <input type="text" placeholder="عنوان..." className="content_input" onChange={setTitleFunc}/>

                <input type="file" className='file_input' onChange={handleChangeFile}/>
                <br/><br/>
                <input type="button" value='ارسال' className='submit_btn' onClick={sendRequest}/>


    
           </div>


}

export default InvesmentSend;