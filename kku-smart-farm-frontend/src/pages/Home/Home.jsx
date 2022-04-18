import { useEffect, useState } from "react";
import HomeService from "../../services/home.service";
import "./home.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "วันอาทิตย์",
  "วันจันทร์",
  "วันอังควร",
  "วันพุธ",
  "วันพฤหสบดี",
  "วันศุกร์",
  "วันเสาร์",
];

export const data = {
  labels,
  datasets: [
    {
      label: "อุณหภูมิ",
      data: [33, 53, 85, 41, 44, 65, 45],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "ความชื้น",
      data: [33, 25, 35, 51, 54, 76, 80],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "ความชื้นดิน",
      data: [33, 40, 55, 71, 34, 96, 80],
      borderColor: "rgb(119, 221, 102)",
      backgroundColor: "rgba(119, 221, 102, 0.5)",
    },
  ],
};

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    HomeService.getDashboard().then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div className="home">
      <div className="home__paddings">
        <Line options={options} data={data} />
      </div>
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
