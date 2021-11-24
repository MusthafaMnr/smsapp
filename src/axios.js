import axios from "axios";
import {baseUrl} from "./constants/constants"


const instance = axios.create({
    baseURL: baseUrl,
    // UserId:"MAHDINS",
    // Password:"3db1b7f215XX",
   
  });

  export default instance;