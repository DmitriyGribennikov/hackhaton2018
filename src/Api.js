const axios = require('axios');


const buildUrl = (url) => `${process.env.REACT_APP_API_ENDPOINT}/${url}`;


export const getParkings = (url) => {
    return axios.get(buildUrl(url))
};

export const getSessions = (url) => {
    return axios.get(buildUrl(url))
};
