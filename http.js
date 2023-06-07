import axios from 'axios';
import router from '../router'

//Content-Type 响应头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//基础url
axios.defaults.baseURL = "http://qfsxb.mynatapp.cc";

/**
 * 封装get方法
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params})
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}

/**
 * 封装post方法
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            })
    });
}