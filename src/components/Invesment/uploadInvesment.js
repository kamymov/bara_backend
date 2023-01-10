import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./uploadInvesment.css";

const UploadInvesment = () => {

    const navigate = useNavigate('')

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    }, [])

    const [data, setData] = useState({
        title: '',
        price: '',
        job_description: '',
        game: '',
        cooperation_type: '',
        sex: '',
        key_indicators: '',
    })

    const uploadInvesment = async () => {
        axios.post('https://api.barainvest.com/matching/create_matching', data, {
            headers: { Authorization: `${localStorage.getItem('token')}`  }
        }).then(response => {
            if(response.data.statusCode){
                new Swal('ارور', response.data.message, 'error')
                return navigate('/upload-invesment')
            }else{
                new Swal('موفق', 'درخواست شما با موفقیت ثبت شد' , 'success')
                return navigate('/matching')
            }
        }).catch(err => {
            new Swal('ارور', 'متاسفانه سرور ما دچار مشکل شده است لطفا بعدا دوباره تلاش کنید', 'error')
            return navigate('/matching')
        })
    }

    return (
        <div className="uploadInvMain">
            
            <h1 className="UInv_title">آپلود سرمایه گذاری</h1>
            <br/>
            <label className="UInv_label">عنوان</label>
            <input className="UInv_input" onChange={(e) => setData({...data, title: e.target.value})} placeholder='عنوان...'/>
            <label className="UInv_label">محدوده قیمتی</label>
            <input className="UInv_input" onChange={(e) => setData({...data, price: e.target.value})} placeholder="از ۵ میلیون تا ۱۰ میلیون..."/>
            <label className="UInv_label">شرح شغل</label>
            <input className="UInv_input" onChange={(e) => setData({...data, job_description: e.target.value})} placeholder="شرح شغل..."/>
            <label className="UInv_label">بازی</label>
            <select class="UInv_input" onChange={(e) => setData({...data, game: e.target.value})}>
                <option selected>بازی را انتخاب کنید</option>
                <option value="Axie">Axie</option>
                <option value="Gods Unchained">Gods Unchained</option>
                <option value="Thetan Arena">Thetan Arena</option>
                <option value="Widi land">Widi land</option>
            </select>
            <label className="UInv_label">نوع همکاری</label>
            <select class="UInv_input" onChange={(e) => setData({...data, cooperation_type: e.target.value})}>
                <option selected>نوع همکاری را انتخاب کنید</option>
                <option value="تمام وقت">تمام وقت</option>
                <option value="پاره وقت">پاره وقت</option>
                <option value="پروژه ای">پروژه ای</option>
            </select>
            <label className="UInv_label">جنسیت</label>
            <select class="UInv_input" onChange={(e) => setData({...data, sex: e.target.value})}>
                <option selected>جنسیت را انتخاب کنید</option>
                <option value="مرد">مرد</option>
                <option value="زن">زن</option>
                <option value="تفاوتی نمیکند">تفاوتی نمیکند</option>
            </select>
            <label className="UInv_label">شاخص های کلیدی</label>
            <input className="UInv_input" onChange={(e) => setData({...data, key_indicators: e.target.value})} placeholder="شاخص های کلیدی..."/>
            <br/>
            <input type="submit" value="ثبت" className="UInv_submit" onClick={uploadInvesment}/>

        </div>
    )


}

export default UploadInvesment;