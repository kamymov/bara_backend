import "./mainPage.css";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../responsiveStyles/responsive.css";
const ManinPage = () => {
  const handleSeachChange = (event) => {
    console.log(event.target.value);
  };

  const cheapContent = [
    "Axie",
    "Thetan arena",
  ];

  const logger = () => {
    console.log("this is test")
  }  

  return (
    <>
      <div className="parent">
        <div className="container">
          <div className="search">
            <input
              name="job"
              placeholder="مهارت شخص مورد نظر..."
              onChange={handleSeachChange}
            />
          </div>
          <select>
            <option disabled selected>
              بازی
            </option>
              {cheapContent.map((c) => {
                return <option>{c}</option>
              })}
          </select>
        </div>
        <Button
          sx={{ marginTop: "-1rem" }}
          className="serach button"
          variant="contained"
        >
          <SearchIcon />
          جست و جو در مشاغل
        </Button>
      </div>
    </>
  );
};
export default ManinPage;
