/********************************************************/
/*          Archivo de Configuración de Axios           */
/********************************************************/

import axios from 'axios';
import join from "url-join";
// import { getEnvVariables } from '../helpers';



const processEnv = 'https://localhost:5109/api/' // const { VITE_API_URL } = import.meta.env; // getEnvVariables();  // process.env.BAYERAPP_BACKEND;


export default function endPoint(axios) {
    axios.interceptors.request.use(
        config => {
            //   const { auth: { authToken } } = store.getState();
            const token = localStorage.getItem('x-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // if (!isAbsoluteURLRegex.test(config.url)) {
            config.url = join(processEnv, config.url);
            // }

            return config;
        },
        // err => Promise.reject(err)
    );
}
