import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./sendRequest.css"
import * as Swal from 'sweetalert2';

const SendRequest = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.id;
    const [invesment_type, setInvesmentType] = useState('');
    const [description, setDescription] = useState('')
    const [file, setFile] = useState({})


    const handleChangeFile = async (e) => {
        let File = e.target.files[0]
        setFile({file: File})
    }

    const sendRequest = () => {
        const formData = new FormData();
        formData.append('investment_id', id)
        formData.append('invesment_type', invesment_type)
        formData.append('description', description)
        formData.append('file', file.file)
        axios.post('https://api.barainvest.com/matching/send_request', formData, {
            headers: { 'Content-Type': 'multipart/form-data', Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWNlaXB0TWV0aG9kIjp7InVzZXJQaG90byI6MCwiaW52aXRlZFVzZXIiOjAsInNpbmd1cCI6MjUsInN1cnZlcnkiOjAsIm9yZGVyIjowLCJjb21wbGV0ZUluZm8iOjB9LCJsb3NlU2NvcmUiOnsiZGlzY291bnRDb2RlIjowLCJsYXR0ZXJ5IjowLCJtYWhhayI6MCwiZ2V0TWFnIjowfSwiX2lkIjoiNjM5MGI5NjM2ZjI5ZTlhMTYyZjQwNzg4IiwiYWN0aXZpdHkiOjAsInBhc3N3b3JkIjoiJDJhJDEyJGpoVmxDR25kZjVzRUpsemhhcWZ0Sy5qWDFhYy5qMkYxMTdiODNEd0dyek1NMGFBRXBzbXhlIiwiUGhvbmVOdW1iZXIiOjkxMjc4OTI0MTksInNjb3JlV2FsbGV0IjoyNSwidXNlT2ZmIjowLCJpbnZpdGVkTnVtIjowLCJkYXRlIjoiMjAyMi0xMi0wN1QxNTowODoxNC41OTZaIiwib3JkZXJzIjpbXSwibWVzc2FnZXMiOltdLCJhbnN3YXJlU3VydmV5IjpbXSwicmVjZWlwdE1ldGhvZHNBbnN3ZXIiOltdLCJxdWVzdGlvbkFuc3dlcnMiOltdLCJfX3YiOjAsImlhdCI6MTY3MDQyOTQwNCwiZXhwIjoxNjcxMDc0NDA0fQ.mGRbtUIVU4Y_sNYE1LAoEpceM-0D3frNsk5GZDNZJz4'  }
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

    const setInvesmentTypeFunc = (e) => {
        setInvesmentType(e.target.value)
    }

    const setDescriptionFunc = (e) => {
        setDescription(e.target.value)
    }

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    }, [])

    return <div className="form_div">
        <br/>
        <h1 className='h1_title'>آپلود مدارک</h1>

        <input type="text" placeholder="نوع گیمر..." onChange={setInvesmentTypeFunc} className="content_input"/>
       
        <input type="text" placeholder="توضیحات..." onChange={setDescriptionFunc} className="content_input"/>

        <input type="file" className='file_input' onChange={handleChangeFile}/>
        <br/><br/>
        <input type="button" value='ارسال' className='submit_btn' onClick={sendRequest}/>

    </div>

}

export default SendRequest;