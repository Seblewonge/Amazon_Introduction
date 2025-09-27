import axios from "axios";
const axiosInstance = axios.create({
//local instance of firebase function
  //baseURL: "http://127.0.0.1:5001/clone-6f969/us-central1/api",
//deployed version of amazon server on render.con
  baseURL: "https://amazon-api-deploy-rwb4.onrender.com/",
});

export{axiosInstance}