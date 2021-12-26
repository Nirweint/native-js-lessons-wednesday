import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '86f472c0';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?t=${title}&apikey=${key}`)
            .then(res => res)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?t=${title}&type=${type}&apikey=${key}`)
            .then(res => res)
    }
};


export default API;
