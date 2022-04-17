import "./wifi.scss";

const Wifi = () => {
  return (
    <div className="wifi">
      <div className="wifi__grid">
        <div className="wifi__header">ตั้งค่า Wifi</div>
        <div className="wifi__box">
          <div className="wifi__item">ชื่อ wifi</div>
          <input type="text" id="name" name="name"></input>
          <div className="wifi__item">รหัสผ่าน</div>
          <input type="text" id="password" name="password"></input>
          <div className="wifi__item">หมายเลขบอร์ด</div>
          <input type="text" id="boardNo" name="boardNo"></input>
        </div>
        <button className="wifi__button">บันทึก</button>
      </div>
    </div>
  );
};

export default Wifi;
