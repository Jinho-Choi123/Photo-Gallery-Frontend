import axios from 'axios';

const Domain = 'http://localhost:8000/';

axios.defaults.withCredentials = true;

const request = (method, url, data) => {
    axios({
        method,
        url: Domain + url,
        data: data
    })
    .then((res) => {return res.data})
    .catch((err) => {
        //Handle Error
        return console.log(err)
    })
}

export default request;