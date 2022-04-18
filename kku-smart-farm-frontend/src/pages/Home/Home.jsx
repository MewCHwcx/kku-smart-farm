import { useEffect, useState } from "react";
import HomeService from "../../services/home.service";
import "./home.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    HomeService.getDashboard().then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div className="home">
      <div className="home__grid-container">
        {items.map((item) => {
          return (
            <>
              <div className="home__box">
                <div className="home__item__value">{item.temperature} °C</div>
                <div className="home__item__name">อุณหภูมิ</div>
              </div>
              <div className="home__box">
                <div className="home__item__value">{item.humidity} %</div>
                <div className="home__item__name">ความชื้น</div>
              </div>
              <div className="home__box">
                <div className="home__item__value">{item.soil_moisture} %</div>
                <div className="home__item__name">ความชื้นดิน</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
