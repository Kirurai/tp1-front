import axios from "axios";

const instance = axios.create({
    baseURL: "localhost:8080/api/empresa",
});

export default instance;
