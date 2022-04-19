import { httpClient } from "../client";

const RelayService = {
  getControlRelay: () => {
    return httpClient.get("/getcontrolrelay");
  },
  putControlRelay: (id_main_now) => {
    const controlRequest = {
      id_main_now: id_main_now,
    };
    return httpClient.put("/setcontrolrelay", controlRequest);
  },
  getManualRelay: () => {
    return httpClient.get("/getmanaul");
  },
  putManualRelay: (id_relay_sel, id_status_sel) => {
    const manualRequest = {
      id_relay_sel: id_relay_sel,
      id_status_sel: id_status_sel,
    };
    return httpClient.put("/manual", manualRequest);
  },
  getAutoRelay: () => {
    return httpClient.get("/getauto");
  },
  updateAutoRelay: (set_date, set_time, set_time_wrk) => {
    const autoRequest = {
      set_date: set_date,
      set_time: set_time,
      set_time_wrk: set_time_wrk,
    };
    return httpClient.post("/auto", autoRequest);
  },
  getSetRelay: () => {
    return httpClient.get("/getsetrelay");
  },
  putSetRelay: (id_relay, id_status_sel, n_status) => {
    const setrelayRequest = {
      id_relay: id_relay,
      id_status_sel: id_status_sel,
      n_status: n_status,
    };
    return httpClient.put("/setrelay", setrelayRequest);
  },
};

export default RelayService;
