import {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainMatching from './components/Matching/mainMatching';
import Matching from './components/Matching/matching';
import SendRequest from './components/Matching/sendRequest';
import InvesmentSend from './components/Matching/invesmentSend'
import JobSiker from './jobSeeker/index'
import { ShowModalContext } from "./context/showModalContext"
import UploadInvesment from './components/Invesment/uploadInvesment';
import Menu from './Menu/menu';
import axios from 'axios';
import CheckInvesment from './jobSeeker/components/checkInvestment/checkInvesment';
import CheckScaler from './jobSeeker/components/checkScaler/checkScaler';
import Profile from './profile/profile';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //     axios.get('https://api.barainvest.com/users/get-user-by-id', {headers: {
  //       Authorization: `${localStorage.getItem('token')}`
  //     }}).then(response => {
  //       setUser(response.data)
  //     })
  // }, [])

  return (
    <>
      <ShowModalContext.Provider value={{ showModal, setShowModal }}>      
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/matching' element={<JobSiker />} />
              <Route path='/upload-invesment' element={<UploadInvesment />}/>
              <Route path='/check-invesment' element={<CheckInvesment />}/>
              <Route path='/check-scaler' element={<CheckScaler />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
      </ShowModalContext.Provider>
    </>
  );
};

export default App;