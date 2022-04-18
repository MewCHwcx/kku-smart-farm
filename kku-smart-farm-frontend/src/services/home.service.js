import { httpClient } from "../client";

const HomeService = {
  getDashboard: () => {
    return httpClient.get("/dashboard");
  },
};

export default HomeService;
