import axios from 'axios';
const Domain = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export const request = (method, url, datga) => {
    return axios({
        method,
        url: Domain + url,
        data: datga
    })
    .then((res) => {res.data})
    .catch((err) => {console.log(err)})
}