import { Button } from "@mui/material";
import { useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./jobDetail.css";
import CompanyDetail from "./components/companyDetail/companyDetail";
import BasicModal from "./components/modal";
import { ShowModalContext } from "../../../context/showModalContext";
import Thetan from '../../../assets/Games Poster/Thetan_poster.jpeg';


const JobDetail = ({data}) => {
  const showModal = useContext(ShowModalContext);

  const handleClick = () => {
    showModal.setShowModal(true);
  };
  return (
    <>
      <div className="jobDetailContainer">
        <header>
          <h2>{data.title}</h2>
          <Button
            className="cvSender"
            sx={{ height: "2rem" }}
            variant="contained"
            color="success"
            onClick={handleClick}
          >
            ارسال رزومه
          </Button>
        </header>
        <br/>
        <span>قیمت :‌ </span>
        <div className="footer">
          <span className="price">{data.price}</span>
          {/* <FavoriteBorderIcon /> */}
        </div>
      </div>
      <div className="poster">
        <img className="game_poster_img" src={Thetan}/>
      </div>
      <CompanyDetail data={data}/>
      <BasicModal data={data}/>
    </>
  );
};
export default JobDetail;
