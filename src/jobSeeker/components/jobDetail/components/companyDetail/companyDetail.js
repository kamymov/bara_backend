import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Tooltip, IconButton } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import TabPanel from "../tabs";
import "./companyDetail.css";
const CompanyDetail = ({ data }) => {
  
  return (
    <div className="companyDetail">
      <header>

      </header>
      <TabPanel data={data}/>
    </div>
  );
};

export default CompanyDetail;
