
import { setCustomerFilterData, setCustomerFilterLoading } from "./currentAccountListSlice";

export const getCustomerFilterData = ( search ) => {
    // debugger;
    
    return async( dispatch ) =>{
        dispatch( setCustomerFilterLoading() );
        //inserte rtk o axios Aqui

        console.log(search)

        const options = [
            { text: '00001 - Grains', value: '00001' },
            { text: '00002 - Vegetables', value: '00002' },
            { text: '00003 - Fruit', value: '00003' },
            { text: '00004 - Dairy', value: '00004' },
            { text: '00005 - Meat', value: '00005' }
        ].filter( (a)=> a.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 );

        setTimeout(()=>{//Simula la llamada asincronica

            dispatch( setCustomerFilterData(options) )

            }, 1000);
        
    }
}