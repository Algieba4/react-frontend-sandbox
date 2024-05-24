import axios from 'axios';

const invokeWebservice = (method: string, uri: string) => {
    const url = "http://127.0.0.1:8080" + uri;

    console.log("method: " + method);
    console.log("url: " + url);

    return axios({
        method: method,
        url: url
    })
}

export default invokeWebservice;