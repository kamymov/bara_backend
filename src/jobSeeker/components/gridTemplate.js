import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import JobOfferMenu from "./jobOfferMenu";
import { useState } from "react";
import JobDetail from "./jobDetail";
import "../jobSeeker.css";
import src from "./choose.jpg";
export default function ColumnsGrid() {
  const [clickedCard, setClickedCard] = useState(-1);
  const [data, setData] = useState({})


  return (
    <Box sx={{ flexGrow: 1, padding: "1rem 4rem", backgroundColor: "#f8f9fa" }}>
      <Grid container spacing={2} columns={13}>
        <Grid item md={5} xs={13}>
          <JobOfferMenu setClickedCard={setClickedCard} setdata={setData}/>
        </Grid>
        <Grid
          item
          md={8}
          sx={
            clickedCard === 1 && {
              overflowY: "scroll",
              height: "36rem",
            }
          }
        >
          {clickedCard === 1 ? (
            <JobDetail data={data}/>
          ) : (
            <div className="choose">
              <h2 className="main-title">
                جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب
                کنید.
              </h2>
              <img src={src} alt="" />
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
