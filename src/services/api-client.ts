import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "53e533a492e54d489a8eb82534b2e5d6",
    },
});

export { CanceledError };
