import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__grid-container">
        <div className="home__box">
          <div className="home__item__value">0 %</div>
          <div className="home__item__name">อุณหภูมิ</div>
        </div>
        <div className="home__box">
          <div className="home__item__value">0 %</div>
          <div className="home__item__name">ความชื้น</div>
        </div>
        <div className="home__box">
          <div className="home__item__value">0 %</div>
          <div className="home__item__name">ความชื้นดิน</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
