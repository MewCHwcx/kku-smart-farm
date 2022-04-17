import "./relay.scss";
import { useNavigate } from "react-router-dom";

const RelaySetting = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/relay");
  };

  return (
    <div className="relay__setting">
      <div className="relay__setting__grid">
        <div className="relay__item__header">ตั้งค่า Wifi</div>
        <div className="relay__setting__box">
          <div className="relay__item__body">วัน</div>
          <input type="text" id="day" name="name"></input>
          <div className="relay__item__body">เริ่มทำงาน</div>
          <input type="text" id="time" name="password"></input>
          <div className="relay__item__body">ทำงาน (นาที)</div>
          <input type="text" id="minute" name="name"></input>
          <div className="relay__setting__grid">
            <label className="container">
              รีเลย์ 1<input type="checkbox"></input>
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
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  );
};

export default RelaySetting;
