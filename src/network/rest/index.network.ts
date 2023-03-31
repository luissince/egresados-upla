import axios from 'axios';
import Response from '../../model/class/response.model.class';
import Resolve from '../../model/class/resolve.model.class';
import RestError from '../../model/class/resterror.model.class';

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
    const token = storage.getItem('token');
    if (token !== null) {
        config.headers.Authorization = 'Bearer ' + JSON.parse(token);
    }
    return config;
});

export async function LoginRest<Login>(params: object, signal = null): Promise<Response<Login> | RestError> {
    return await Resolve.create<Login>(instance.post<Login>("/Login", params, { signal: signal! }));
}

export async function EstudianteRest<Estudiante>(codigo: string, signal = null): Promise<Response<Estudiante> | RestError> {
    return await Resolve.create<Estudiante>(instance.get<Estudiante>("/MostrarFacultad/" + codigo, { signal: signal! }));
}

export async function TrabajadorRest<Trabajador>(dni: string, signal = null): Promise<Response<Trabajador> | RestError> {
    return await Resolve.create<Trabajador>(instance.get<Trabajador>("/Soporte/obtenerDatosTrabajadorPorDni/" + dni, { signal: signal! }));
}

export async function ValidarTokenRest<Void>(signal = null): Promise<Response<Void> | RestError> {
    return await Resolve.create<Void>(instance.get<Void>("/Aplicacion/validarToken", { signal: signal! }));
}