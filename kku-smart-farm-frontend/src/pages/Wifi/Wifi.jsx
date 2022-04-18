import { useEffect, useState } from "react";
import WifiService from "../../services/wifi.service";
import "./wifi.scss";

const Wifi = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [boardNo, setBoardNo] = useState("");

  const onSubmit = () => {
    WifiService.updateWifi(name, password, boardNo);
    console.log({ name, password, boardNo });
  };

  useEffect(() => {
    WifiService.getWifi().then((res) => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    setName(items[0]?.name_wifi);
    setPassword(items[0]?.password_wifi);
    setBoardNo(items[0]?.num_board);
  }, [items]);

  console.log({ items });

  return (
    <div className="wifi">
      <div className="wifi__grid">
        <div className="wifi__header">ตั้งค่า Wifi</div>
        {items.map((item) => {
          return (
            <>
              <div className="wifi__box">
                <div className="wifi__item">ชื่อ wifi</div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(name) => setName(name.target.value)}
                  value={name}
                ></input>
                <div className="wifi__item">รหัสผ่าน</div>
                <input
                  type="text"
                  id="password"
                  name="password"
                  onChange={(password) => setPassword(password.target.value)}
                  value={password}
                ></input>
                <div className="wifi__item">หมายเลขบอร์ด</div>
                <input
                  type="text"
                  id="boardNo"
                  name="boardNo"
                  onChange={(boardNo) => setBoardNo(boardNo.target.value)}
                  value={boardNo}
                ></input>
              </div>
            </>
          );
        })}
        <button className="wifi__button" onClick={onSubmit}>
          บันทึก
        </button>
      </div>
    </div>
  );
};

export default Wifi;
