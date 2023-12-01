import { createSlice } from '@reduxjs/toolkit'

export const basicMasterSlice = createSlice({
  name: 'basicMaster',

  initialState: { 
            masters: {
              ImportFileConfig: {                
                  isLoading: false,  
                  table: {
                    columns:[
                      // {
                      //     header: 'First Name',
                      //     accessor: 'firstName'
                      //     ,width: 100
                          
                      // },
                      // {
                      //     header: 'Last Name',
                      //     accessor: 'lastName'
                      //     ,width: 450
                      // },
                      // {
                      //     header: 'Age',
                      //     accessor: 'age'
                      // },
                      // {
                      //     header: 'Visits',
                      //     accessor: 'visits'
                      // },
                      // {
                      //     header: 'Status',
                      //     accessor: 'status'
                      // },
                      // {
                      //     header: 'Profile Progress',
                      //     accessor: 'progress'
                      // }
                  ],
                    data:[
                      // {
                      // firstName: "test",
                      // lastName: "hola",
                      // age: 10,
                      // visits: 2,
                      // progress: 33,
                      // status: 0.1
                      // },
                      // {
                      //     firstName: "Devin",
                      //     lastName: "Townsend",
                      //     age: 15,
                      //     visits: 23,
                      //     progress: 4,
                      //     status: 0.9
                      // }
                      // ,{
                      //     firstName: "Devin",
                      //     lastName: "Townsend",
                      //     age: 29,
                      //     visits: 23,
                      //     progress: 40,
                      //     status: 0.7
                      // }
                  ]
                  },
                  defaultFilters:{   
                    isLoading: false,      
                    selectedValue: "",        
                  }

              }
              
            }
            
    },
  
  reducers: {
    setDefaultFilterValue: (state, { payload }) => {
        //state.defaultFilter.selectedValue = payload;    
    },
    setMaster:(state, {payload}) => {      
      //Si no existe la propiedad con el npombre del maestro la crea --> state.masters[payload]
      debugger;
      if(!state.masters[payload]){
      state.masters[payload]={};
      state.masters[payload].table = {};
      state.masters[payload].isLoading = "true"; 
      }
    },
    setTableData: (state, {payload}) => {      
      debugger;
      state.masters[payload.name].table = payload.table;    
    },

  },
});
export const {  setTableData,setMaster } = basicMasterSlice.actions;
