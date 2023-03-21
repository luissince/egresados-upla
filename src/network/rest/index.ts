import axios from 'axios';
import Response from '../../model/clases/response';
import Resolve from '../../model/clases/resolve';
import RestError from '../../model/clases/resterror';

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_APP,
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    const storage = window.localStorage as Storage;
    const data = JSON.parse(storage.getItem('login')!);
    console.log(data)
    // if (data !== null) {
    //     config.headers.Authorization = 'Bearer ' + data.token;
    // }
    return config;
});

export async function Login<Token>(params: object, signal = null): Promise<Response<Token> | RestError> {
    return await Resolve.create<Token>(instance.post<Token>("/Login", params, { signal: signal! }));
}
