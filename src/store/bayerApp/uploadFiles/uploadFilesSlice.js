import { createSlice } from '@reduxjs/toolkit'

export const uploadFilesSlice = createSlice({
  name: 'uploadFiles',

  initialState: { 
            layOutFilter:{
                isLoading: false,
                data: [],
                selectedValue: "",        
            },
            attachment:{
                //file: null, No se puede deserializar el archivo
                //fileName: null, No utilizado por h
                attachmentProcesing: false,
                
            }
    },
  
  reducers: {
    //Filtro LayOut
    setLayOutFilterLoading: (state, { payload }) => {
        state.layOutFilter.isLoading = payload;
    },
    setLayOutFilterData: (state, { payload }) => {        
        state.layOutFilter.data = payload;            
      },
    setLayOutFilterValue: (state, { payload }) => {
        state.layOutFilter.selectedValue = payload;    
        //state.layOutFilter.data = [payload];    
      },
    setAttachmentProcesing: (state, { payload }) => {
        state.layOutFilter.setAttachmentProcesing = payload;    
        //state.layOutFilter.data = [payload];    
      },
  },

});
export const { setLayOutFilterLoading, setLayOutFilterData, setLayOutFilterValue, setAttachmentProcesing} = uploadFilesSlice.actions;
