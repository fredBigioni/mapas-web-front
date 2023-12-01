import axios from "axios";
import { setMaster, setTableData } from "./basicMasterSlice";

export const getTableData = ( table ) => {
    
    return async( dispatch ) =>{
        //dispatch( setLayOutFilterLoading(true) );
        debugger;
        dispatch( setMaster(table) );
        debugger;
        const {data}  = await axios.get(`/Masters/getMasterData?masterName=${table}`);
        // {"columns":[],"data":[{"First Name":"Devin","Last Name":"Townsend"}]}

        debugger;

        // data.columns = [
        //     {
        //         header: 'First Name',
        //         accessor: 'firstName'
        //         ,width: 100
                
        //     }];

        var test = {
            columns:[
                {
                    header: 'First Name',
                    accessor: 'firstName'
                    ,width: 100
                    
                }],
            data:[
                {
                firstName: "test",
                lastName: "hola",
                age: 10,
                visits: 2,
                progress: 33,
                status: 0.1
                }]
            }

        dispatch( setTableData({name:table,table:data}) );
        
    }
}