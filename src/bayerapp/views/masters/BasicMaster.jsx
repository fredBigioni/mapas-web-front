import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CustomFilters } from '../../components/filters'
import { Table, TableTopBar, Textfield } from '@element/react-components';
import { getTableData } from '../../../store/bayerApp/master/thunks';

export const BasicMaster = ({parameter}) => {
debugger; 
    const {masters} = useSelector( state => state.basicMaster);
    

    const dispatch = useDispatch();
    
    //  const [data, setData] = useState(masters[parameter].table.data);
     const [data, setData] = useState();

    const handleChangeFilter = (e) => {
        debugger;
        setData(masters[parameter].table.data.filter(obj => Object.values(obj).some(value => value.toString().includes(e.target.value))) );
    }

    useEffect(()=>{
        if(masters[parameter] && masters[parameter].table && masters[parameter].table.data)
        setData(masters[parameter].table.data);
    },[masters])

    useEffect(() => {                
        dispatch(getTableData(parameter));
    },[])
    

    return (        
        <div>
        {/* <CustomFilters 
            value={defaultFilter.selectedValue} 
            setValue={ (val) => dispatch( setDefaultFilterValue(val) )}  
            label = "Filtrar"
            type = "textFilter"
            zoom = {0.8}
        />       */}
        {
        masters[parameter]?.table?.data && parameter ?          
        <Table
            //columnStriped //aplica las rayas
            //rowHeight
            //nested //le saca el marco
            dense
            //fixedColumnsBorder//nohacenada
            fullWidth
            paginated
            noContentIncludeTable     
            //noContentMessage       
            resizableColumns 
            sortable            
            data={data}
            columns={masters[parameter].table.columns}
            leadingContent={
                <TableTopBar
                    title= "Titulo del maestro"
                    actions={
                        <Textfield
                            variant='embedded'
                            leadingIcon='search'
                            label='Search'
                            dense   
                            onChange={(e)=>{handleChangeFilter(e)}}                         
                        />
                    }
                />
            }
        />
        :<>loading....</>
        }


        </div>
    )
}
