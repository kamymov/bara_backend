import Card from "./card/card";
import "../jobSeeker.css";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { Switch } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
const JobOfferMenu = ({ setClickedCard, setdata }) => {

  const [data, setData] = useState([])
 
  useEffect(() => {
    axios.get('https://api.barainvest.com/matching/all', {headers: {
      Authorization: `${localStorage.getItem('token')}`
    }}).then(response => {
      setData(response.data)
    })  
  }, [])


  return (
    <div className="box">
      <header>

      </header>
      <div sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((c) => {
          return (
            <Card setClickedCard={setClickedCard} data={c} setdata={setdata}/>
          )
        })}

      </div>
    </div>
  );
};

export default JobOfferMenu;
