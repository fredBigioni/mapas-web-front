import React, {  useCallback } from 'react';
import {   CircularProgress, Select, Textfield } from '@element/react-components';

// const filterConfig = {
//     matchFrom: 'end'
// };
const filterConfig = { 'ignoreCase': true, 'ignoreAccents': true, 'matchFrom': 'any', 'trim': true };

export const CustomFilters = ({value, setValue, options = [], getDataFunction, label, zoom = 1, type, isLoading = true }) => {    
    const handleOnChange = useCallback((val) => {
        setValue(val);
    }, []);
    
    const handleOnChangeTextFilter = useCallback((e)  => {
        // console.log(e.target.value)
        setValue(e.target.value);
    }, [setValue]);    

    //obtine las teclas pulsadas sobre el filtro
    const handleOnImputChange = useCallback((a) => {       

        if(a.length >= 3){    
            getDataFunction(a);
        }
    }, []);
   

    switch (type) {
        case "asincSelectorFilter":
            return (
                <Select            
                    onChange={handleOnChange}
                    value={value}
                    options={options}
                    filterConfig = {filterConfig}
                    searchable
                    onInputChange={handleOnImputChange}
                    variant='outlined' //filled, outlined
                    label={label}
                    style={{zoom:`${zoom}` }}
                    leadingIcon = {isLoading ? <CircularProgress /> : "" }
                />    
               
            );
        case "textFilter":
            return(
                <div
                 style={{zoom:`${zoom}` }}
                >
                <Textfield 
                onChange={handleOnChangeTextFilter} 
                variant='outlined'
                label={label}
                value={value}
                autoFocus                 
            />  
            </div>
            )
    }
};
