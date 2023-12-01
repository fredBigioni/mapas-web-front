# asincSelectorFilter

# Ejemplos
### Slice    
      initialState: { 
            layOutFilter:{
            isLoading: false, 
            data: [],   //Las opciones del selector //Si no se carga asincronicamente definir aca los valores
            selectedValue: "",  //La opción seleccionada      
            }
    },  
  reducers: {
    setLayOutFilterLoading: (state, { payload }) => {
        state.layOutFilter.isLoading = true;
    },
    setLayOutFilterData: (state, { payload }) => {        
        state.layOutFilter.data = payload;    
      },
    setLayOutFilterValue: (state, { payload }) => {
        state.layOutFilter.selectedValue = payload;    
        state.layOutFilter.data = [payload];   // ==> ['En el caso de que al seleccionar el valor es necesario borrar el contenido del selector // generalemente usado para llamadas asincronicas que demoren mucho']
      }
  }

### Thunk
    export const getLayOutFilterData = ( search ) => {    
    return async( dispatch ) =>{
        dispatch( setLayOutFilterLoading() );
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

            dispatch( setLayOutFilterData(options) )

            }, 1000);
        
    }
    }

### Componente
    <CustomFilters
        value={layOutFilter.selectedValue} 
        setValue={ (val) => dispatch( setLayOutFilterValue(val) ) }  
        getDataFunction = { (val) => dispatch( getLayOutFilterData(val) ) } //dispatch( getLayOutFilterData(val) ) }  /// ==> [Se dispara al concatenar 3 caracteres en la busqueda]
        options={layOutFilter.data}
        label = "LayOut"
        type = "asincSelectorFilter"
        zoom = {0.7}
    />       