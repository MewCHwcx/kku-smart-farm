import "./censor.scss";
import { useNavigate, useLocation } from "react-router-dom";

const CensorSetting = (props) => {
  let navigate = useNavigate();
  const { state } = useLocation();
  

  const goBack = () => {
    navigate("/censor");
  };

  return (
    <div className="censor__setting">
      <div className="censor__setting__grid">
        <div className="censor__item__header">เพิ่มการตั้งค่า{state.title}</div>
        <div className="censor__setting__box">
          <div className="censor__item__body">{state.title} ({state.unit})</div>
          <input type="text" id="name" name="name"></input>
          <div className="censor__item__body">ทำงาน (นาที)</div>
          <input type="text" id="password" name="password"></input>
          <div className="censor__setting__grid">
            <label className="container">
              รีเลย์ 1<input type="checkbox" ></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 2<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 3<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">
              รีเลย์ 4<input type="checkbox"></input>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <button className="censor__button" onClick={goBack}>
          บันทึก
        </button>
      </div>
    </div>
  );
};

export default CensorSetting;
