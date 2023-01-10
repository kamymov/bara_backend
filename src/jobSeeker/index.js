import Cheaps from "../components/cheaps";
import ManinPage from "../mainPage";
import ColumnsGrid from "./components/gridTemplate";
import "../responsiveStyles/responsive.css";
import "./jobSeeker.css";
import Menu from "../Menu/menu";
const JobSiker = () => {
  return (
    <div className="jobsikerBody">
      <Menu />
      <ManinPage />
      <Cheaps />
      <ColumnsGrid />
    </div>
  );
};

export default JobSiker;
