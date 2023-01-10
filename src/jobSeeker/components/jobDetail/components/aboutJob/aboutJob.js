import HelpIcon from "@mui/icons-material/Help";
import { Tooltip, IconButton } from "@mui/material";
import "../../../../../responsiveStyles/responsive.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import "./aboutJob.css";
import { useContext } from "react";
import { ShowModalContext } from "../../../../../context/showModalContext";
const AboutJob = ({data}) => {
  const showModal = useContext(ShowModalContext);
  const handleClick = () => {
    showModal.setShowModal(true);
  };
  
  let tooltipTitle =
    "این شاخص ها مواردی هستند  که کارفرما اعلام کرده در جذب نیروی مورد نظر از بقیه شاخص ها برایش مهم تر هسند";
  return (
    <div className="main-content">
      <h2>مشخصات موقعیت شغلی</h2>
      <div className="detail">
        <div className="first-col">
          <div>
            <h3>نوع همکاری</h3>
            <br/>
            <p>{data.cooperation_type}</p>
            <br/>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>شاخص های کلیدی از نظر کارفرما</h2>
        <br/>
        <Tooltip
          title={tooltipTitle}
          placement="top"
          sx={{ fontSize: "larger" }}
        >
          <IconButton>
            <HelpIcon sx={{ direction: "rtl" }} />
          </IconButton>
        </Tooltip>
      </div>
      <div className="indicator">
        <main>
          <CheckCircleOutlineRoundedIcon />
          <p>{data.key_indicators}</p>
        </main>
        <br/>
      </div>
      <h2> شرح شغل و وظایف</h2>
      <p>{data.job_description}</p>
      <br/>
      <h2>شرایط احراز شغل</h2>
      <div className="jobSituation">
        <h3>جنسیت</h3>
        <p>{data.sex}</p>
      </div>
      <br/>
      <div className="jobSituation">
        <h3>بازی</h3>
        <p>{data.game}</p>
      </div>
      <button className="mobile-cvSender" onClick={handleClick}>
        ارسال رزومه
      </button>
    </div>
  );
};
export default AboutJob;
