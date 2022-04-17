import "./relay.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const relayItems = [
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

const Relay = () => {
  const [toggle, setToggle] = useState(true);
  const [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  const triggerToggle = () => {
    setToggle(!toggle);
    if (toggle === false) {
      setDisable(true);
      navigate("/relay-setting");
    } else {
      setDisable(false);
    }
  };

  return (
    <div className="relay">
      <div className="relay__grid">
        <div className="relay__header">ควบคุมรีเลย์</div>
        <div className="relay__box">
          <div className="relay__flex__margin">
            <div>Auto </div>
            <label className="switch">
              <input
                type="checkbox"
                id="auto_manual"
                onClick={triggerToggle}
              ></input>
              <span className="slider round"></span>
            </label>
            <div> Manual</div>
          </div>
          {relayItems.map((item, index) => (
            <div className="relay__box">
              <div className="relay__flex">
                <div className="relay__body">รีเลย์ {item.index}</div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id={item.id}
                    disabled={disable}
                  ></input>
                  <span className="slider round">
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relay;
