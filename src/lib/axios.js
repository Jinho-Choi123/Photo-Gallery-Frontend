import axios from 'axios';

const Domain = 'http://127.0.0.1:8000';

const request = (method, url, data) => {
    return axios({
        method: method,
        url: Domain + url,
        data: data
    }, {withCredentials: true})

}

export default request;