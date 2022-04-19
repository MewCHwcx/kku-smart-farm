import "./relay.scss";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import RelayService from "../../services/relay.service";

const Relay = () => {
  const [toggle, setToggle] = useState();
  const [disable, setDisable] = useState(false);

  const [manualItem, setManualItem] = useState([]);

  let navigate = useNavigate();

  const triggerToggle = () => {
    console.log("toggle => " + toggle);
    setToggle(!toggle);
    if (toggle === false) {
      setDisable(true);
      navigate("/relay-setting");
    } else {
      setDisable(false);
    }
  };

  const handleClick = (item, id) => {
    let status = item.target.checked;
    if (status === true) {
      RelayService.putManualRelay(id, 2);
    } else if (status === false) {
      RelayService.putManualRelay(id, 1);
    }
  };

  useEffect(() => {
    RelayService.getControlRelay().then((control) => {
      if (control.data[0].detail_main_now === "true") {
        setToggle(true);
        RelayService.getManualRelay().then((relay) => {
          setManualItem(relay.data);
        });
      } else {
        setToggle(false);
      }
    });
  }, []);

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
                onChange={triggerToggle}
                defaultChecked={toggle}
              ></input>
              <span className="slider round"></span>
            </label>
            <div> Manual</div>
          </div>
          {manualItem.map((item, index) => (
            <div className="relay__box">
              <div className="relay__flex">
                <div className="relay__body">รีเลย์ {item.id_relay_select}</div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id={item.id_relay_select}
                    disabled={disable}
                    onClick={(e) => handleClick(e, item.id_relay_select)}
                    defaultChecked={item.detail_status}
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
