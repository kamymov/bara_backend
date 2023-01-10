import src from "../../assets/mainPic.jpg";
import "./aboutCompany.css";
const ABoutCompany = () => {
  return (
    <>
      <h3 className="companyName">درباره راهکار حامی پرداز</h3>
      <p>
        خط مشی شرکت حامی : افزایش میزان فروش خدمات و محصولات ارتقا سطح کیفی
        محصولات جهت دستیابی به حداکثر میزان رضایت مندی فراهم آوردن محیطی امن جهت
        رشد و تعالی حرفه ای کارکنان و ارتقای سطح دانش سازمانی چشم انداز : ارایه
        دهنده ی راهکارهای سیستمی برای تمامی مکانیزم های غیر سیستمی .
      </p>
      <img className="companypPic" src={src} alt="company" />
      <h3>در یک نگاه</h3>
      <div className="footer-content">
        <div className="first-col">
          <div>
            <h3>سال تاسیس</h3>
            <h5>1396</h5>
          </div>
          <div>
            <h3>نوع فعالیت</h3>
            <h5>شرکت ایرانی دارای مشتریان داخلی</h5>
          </div>
          <div>
            <h3>صنعت </h3>
            <h5> فناوری اطلاعات / نرم افزار و سخت افزار</h5>
          </div>
        </div>
        <div className="second-col ">
          <div>
            <h3>اندازه سازمان</h3>
            <h5>11 تا 50 نفر</h5>
          </div>
          <div>
            <h3>مالکیت</h3>
            <h5>خصوصی</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABoutCompany;
