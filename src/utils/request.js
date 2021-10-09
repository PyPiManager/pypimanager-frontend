import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 5000

});

// 请求拦截器
instance.interceptors.request.use(
    config=>{
        // 获取token
        const access_token = window.localStorage.getItem('access_token');
        if (access_token) {
            config.headers.Authorization = 'bearer ' + access_token;
        }
        return config
    },
    error=>{
        return Promise.reject(error)
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        return Promise.reject(error)
    }
);

export function get(url, config) {
    return instance.get(url, config)
}


export function post(url, data, config) {
    return instance.post(url, data, config)
}
