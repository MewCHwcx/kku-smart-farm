import { httpClient } from "../client";
import WifiModel from "../models/wifiModel";

const WifiService = {
  getWifi: () => {
    return httpClient.get("/wifi");
  },
  updateWifi: (name_wifi, password_wifi, num_board) => {
    const request = {
      id_wifi: 1,
      name_wifi: name_wifi,
      password_wifi: password_wifi,
      num_board: num_board,
    };
    return httpClient.post("/updatewifi", request);
  },
};

export default WifiService;
