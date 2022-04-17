import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home/Home";
import Relay from "./pages/Relay/Relay";
import Censor from "./pages/Censor/Censor";
import Wifi from "./pages/Wifi/Wifi";
import CensorSetting from "./pages/Censor/CensorSetting";
import RelaySetting from "./pages/Relay/RelaySetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/relay" element={<Relay />} />
          <Route path="/censor" element={<Censor />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/censor-setting" element={<CensorSetting />} />
          <Route path="/relay-setting" element={<RelaySetting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
