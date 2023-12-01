import { endPoint } from "../../api";
import axios from "axios";
import { checkingCredentials, logout, setIsLoading, setLogin } from "./";


export const checkingAuthentication = (token) => {
    return async( dispatch ) =>{
        if(false){
            dispatch( logout() );            
        }
    }
}


export const startLogin = (login, password) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));           

            const user = { "login": login, "password": password };
            
            debugger;
            const { data } = await axios.post('/auth/authenticate', user);

            debugger;
            dispatch( setLogin(data) );          

            dispatch( setIsLoading(false) );
        }
        catch (error) {
            const err = { error };
            let msg = "";
            if (err.error.code === "ERR_NETWORK")
                msg = err.error.code;
            else
                msg = err.error.response?.data.message;

            // swal({  
            //     title: "Error",
            //     text: msg,
            //     icon: "error",
            //     dangerMode: true,
            // });
            dispatch(setIsLoading(false));
        }
    }
}


export const ping = () => {
    return async( dispatch ) =>{
       
        //inserte rtk o axios Aqui

        console.log("oki");
        const { data } = await axios.get('/auth/ping');

        console.log({data});
        
    }
}
