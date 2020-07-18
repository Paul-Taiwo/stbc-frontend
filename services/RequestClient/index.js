import axios from "axios";

const RequestClient = axios.create({
  baseURL: "https://stbc-api.herokuapp.com/api/v1",
  timeout: 5000,
});

export default RequestClient;
