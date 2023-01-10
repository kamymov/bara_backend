import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Menu from "../Menu/menu";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    national_code: "",
  });
  const [file, setFile] = useState({})


  const handleChangeFile = async (e) => {
      let File = e.target.files[0]
      setFile({file: File})
  }

  useEffect(() => {
    axios
      .get("https://api.barainvest.com/users/get-user-by-id", {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data);
        setUser({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          age: response.data.age,
          national_code: response.data.national_code,
        });
      });
  }, []);

  const sendData = async () => {
    const formData = new FormData();
    formData.append('first_name', user.first_name)
    formData.append('last_name', user.last_name)
    formData.append('age', user.age)
    formData.append('national_code', user.national_code)
    formData.append('file', file.file)
    axios
      .post("https://api.barainvest.com/users/user-update", formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if (!response.data.statusCode) {
          new Swal("موفق", "اطلاعات شما با موفقیت به روز شد", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        new Swal(
          "ارور",
          "سرور ما دچار مشکل شده است لطفا بعدا تلاش کنید",
          "error"
        );
      });
  };

  return (
    <div className="Profile_main">
      <Menu />

      <br />
      <br />

      <div className="Profile_form">
        <label className="form-label Profile_label">نام : </label>
        <input
          type="text"
          className="Profile_input"
          placeholder="نام..."
          onChange={(e) => {
            setUser({ ...user, first_name: e.target.value });
          }}
          value={user.first_name}
        />

        <label className="Profile_label">نام خانوادگی : </label>
        <input
          type="text"
          className="Profile_input"
          placeholder="نام خانوادگی..."
          onChange={(e) => {
            setUser({ ...user, last_name: e.target.value });
          }}
          value={user.last_name}
        />

        <label className="Profile_label">سن : </label>
        <input
          type="number"
          className="Profile_input"
          placeholder="سن..."
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}

          value={user.age}
        />

        <label className="Profile_label">کد ملی : </label>
        <input
          type="text"
          className="Profile_input"
          placeholder="کد ملی..."
          onChange={(e) => {
            setUser({ ...user, national_code: e.target.value });
          }}
          value={user.national_code}
        />

        <label className="Profile_label">عکس : </label>
        <input
          type="file"
          className="Profile_input"
          onChange={handleChangeFile}
        />

        <br />
        <br />
        <input
        type="button"
          className="Profile_btn"
          value="ارسال"
          onClick={sendData}
        />
      </div>
    </div>
  );
};

export default Profile;
