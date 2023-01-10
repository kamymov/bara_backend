import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import CVUploader from "../../../../components/fileUploader";
import { ShowModalContext } from "../../../../context/showModalContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data}) {
  const showModal = React.useContext(ShowModalContext);
  const handleClose = () => showModal.setShowModal(false);
  const [file, setFile] = React.useState()
  const navigate = useNavigate()

  const handleChangeFile = async (e) => {
    let File = e.target.files[0]
    setFile({file: File})
  }

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append('id', data.id)
    formData.append('file', file.file)
    axios.post('https://api.barainvest.com/scaler/add-invesment', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `${localStorage.getItem('token')}`  }
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

  return (
    <div>
      <Modal
        open={showModal.showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            لطفا رزومه خود را آپلود کرده و یا بکشید.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <CVUploader /> */}
            <input type="file" onChange={handleChangeFile}/>

            <input type="submit" value="ارسال" onClick={sendRequest}/>

          </Typography>
        </Box>
      </Modal>
    </div>
  ); 
}
