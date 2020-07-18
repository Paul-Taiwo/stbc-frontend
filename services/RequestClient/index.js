import axios from "axios";

const RequestClient = axios.create({
  baseURL: "",
  timeout: 5000,
});

export default RequestClient;
