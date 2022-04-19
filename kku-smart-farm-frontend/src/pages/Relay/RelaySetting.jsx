import "./relay.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import RelayService from "../../services/relay.service";
import { useEffect, useState } from "react";

const relaySettingItems = [
  {
    index: 1,
    id: "one",
  },
  {
    index: 2,
    id: "two",
  },
  {
    index: 3,
    id: "three",
  },
  {
    index: 4,
    id: "four",
  },
];

const RelaySetting = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [wrkTime, setWrkTime] = useState("");

  let navigate = useNavigate();

  const onSubmit = () => {
    RelayService.updateAutoRelay(date, time, wrkTime);
    RelayService.putControlRelay(1);
    navigate("/relay");
  };

  const dayPicker = [
    { label: "อาทิตย์", value: "อาทิตย์" },
    { label: "จันทร์", value: "จันทร์" },
    { label: "อังคาร", value: "อังคาร" },
    { label: "พุธ", value: "พุธ" },
    { label: "พฤหัสบดี", value: "พฤหัสบดี" },
    { label: "ศุกร์", value: "ศุกร์" },
    { label: "เสาร์", value: "เสาร์" },
  ];

  const handleCheckmark = (item, id) => {
    let status = item.target.checked;
    if (status) {
      RelayService.putSetRelay(id, 2, 1);
    } else {
      RelayService.putSetRelay(id, 1, 0);
    }
  };

  return (
    <div className="relay__setting">
      <div className="relay__setting__grid">
        <div className="relay__item__header">ตั้งค่ารีเลย์</div>
        <div className="relay__setting__box">
          <div className="relay__item__body">วัน</div>
          <div className="select">
            <Select
              onChange={(date) => setDate(date.value)}
              options={dayPicker}
            />
          </div>
          <div className="relay__item__body">เริ่มทำงาน</div>
          <input
            type="time"
            step="1"
            onChange={(time) => setTime(time.target.value)}
          ></input>
          <div className="relay__item__body">ทำงาน (นาที)</div>
          <input
            type="text"
            id="minute"
            name="minute"
            onChange={(wrkTime) => setWrkTime(wrkTime.target.value)}
          ></input>
          <div className="relay__setting__grid">
            {relaySettingItems.map((item, index) => (
              <>
                <label className="container">
                  รีเลย์ {item.index}
                  <input
                    type="checkbox"
                    id={index}
                    onClick={(e) => handleCheckmark(e, item.index)}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </>
            ))}
          </div>
        </div>
        <button className="censor__button" onClick={onSubmit}>
          บันทึกการตั้งค่า
        </button>
      </div>
    </div>
  );
};

export default RelaySetting;
