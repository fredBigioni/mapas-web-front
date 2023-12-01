
import axios from "axios";
import { setAttachmentProcesing, setLayOutFilterData, setLayOutFilterLoading } from "./uploadFilesSlice";

export const getLayOutFilterData = ( search ) => {
    
    return async( dispatch ) =>{
        dispatch( setLayOutFilterLoading(true) );
        //inserte rtk o axios Aqui
        console.log(search)

        // debugger;
        const options  = await axios.get(`/ImportFile/getLayOuts`);

        // options.filter( (a)=> a.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 );
        // debugger;
        dispatch( setLayOutFilterData(options.data.data) )
        dispatch( setLayOutFilterLoading(false) );
        /*
        const options = [
            { text: '00001 - Grains', value: '00001' },
            { text: '00002 - Vegetables', value: '00002' },
            { text: '00003 - Fruit', value: '00003' },
            { text: '00004 - Dairy', value: '00004' },
            { text: '00005 - Meat', value: '00005' }
        ].filter( (a)=> a.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 );

        setTimeout(()=>{//Simula la llamada asincronica
            dispatch( setLayOutFilterData(options) )
            dispatch( setLayOutFilterLoading(false) );
        }, 1000);
        */
        
    }
}


export const importFile = ( formData, layOutCode ) => {

    return async ( dispatch ) =>{
        // debugger;
        dispatch( setAttachmentProcesing("start") );

        const { data } = await axios.post(`/ImportFile/saveFile?layOutCode=${layOutCode}`, formData);

        setTimeout(()=>{//Simula la llamada asincronica
            dispatch( setAttachmentProcesing(false) );
        }, 1000);

        
    }
}