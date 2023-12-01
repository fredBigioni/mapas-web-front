import { createSlice } from '@reduxjs/toolkit'

export const currentAccountListSlice = createSlice({
  name: 'currentAccountList',

  initialState: { 
            customerFilter:{
            isLoading: false,
            data: [],
            selectedValue: "",        
            },
            documentfilter:{   
            isLoading: false,      
            selectedValue: "",        
            }
    },
  
  reducers: {
    setCustomerFilterLoading: (state, { payload }) => {
        state.customerFilter.isLoading = true;
    },
    setCustomerFilterData: (state, { payload }) => {
        state.customerFilter.data = payload;    
      },
    setCustomerFilterValue: (state, { payload }) => {
        state.customerFilter.selectedValue = payload;    
      },
    setDocumentfilterValue: (state, { payload }) => {
        console.log("payload")
        console.log(payload)
    state.documentfilter.selectedValue = payload;    
    },

  },
});
export const { setCustomerFilterLoading, setCustomerFilterData, setCustomerFilterValue, setDocumentfilterValue} = currentAccountListSlice.actions;
