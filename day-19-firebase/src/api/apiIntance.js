import axios from "axios";

const apiIntance = axios.create({
    baseURL : import.meta.env.VITE_APP_DATABASE_URL
})

export default apiIntance;