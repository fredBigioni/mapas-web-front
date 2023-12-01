import { ActionItem, Button, Card, CardActions, CardBody, CardContent, CardDivider, CardTitle, Grid, GridCol, GridRow, Group } from "@element/react-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerFilterValue, setDocumentfilterValue } from "../../../../store/bayerApp/currentAccountList";
import { getCustomerFilterData } from "../../../../store/bayerApp/currentAccountList/thunks";
import { CollapsableFilters } from "../../../components/collapsebleFilters";
import { CustomFilters } from "../../../components/filters"



export const CurrentAccountListFilters = () => {

    const {customerFilter, documentfilter}= useSelector( state => state.currentAccountList);

    const dispatch = useDispatch();
    // console.log(customerFilter.selectedValue)

    useEffect(() => {
        // debugger;
        //const a = await getCustomers();        
    }, [])
    
    const _setVal = (val) => {
        alert("hola");
    }

  return (
    // <div>CurrentAccountList</div>
    <>
    <Grid fullWidth 
    // style={{borderStyle:"solid"}}
    >
        <GridRow>
            <GridCol desktopCol={10}  >
                <Grid gridAlign='left'>
                    <GridRow >
                        <GridCol desktopCol={6} phoneCol={12}>
                            <CustomFilters 
                                        value={customerFilter.selectedValue} 
                                        setValue={ (val) => dispatch( setCustomerFilterValue(val) )}                            
                                        options={customerFilter.data} 
                                        getDataFunction                         
                                        label = "Cliente"
                                        zoom = {0.8}
                                        type = "asincSelectorFilter"
                                    /> 
                        </GridCol>
                        <GridCol desktopCol={4} phoneCol={12}>
                            <CustomFilters 
                                        value={documentfilter.selectedValue} //customerFilter.value
                                        setValue={ (val) => dispatch( setDocumentfilterValue(val) )} 
                                        label = "Nro. Documento"
                                        type = "textFilter"
                                        zoom = {0.8}
                                    />                             
                        </GridCol>
                    </GridRow>
                    {/* Segunda linea de Filtros */}
                    {/* <GridRow style={{paddingTop:"10px"}}>
                        <GridCol desktopCol={2} phoneCol={12} verticalAlign="middle">      
                       
                        </GridCol>               
                    </GridRow>        */}
                </Grid>
            </GridCol>
            <GridCol desktopCol={1} phoneCol={12} verticalAlign="middle">
                    <Grid>
                        <Group padding='dense' direction='vertical'>
                            <Button
                                label='Filtrar'
                                leadingIcon='home'
                                variant='filled'
                                //onClick={handleClick}
                            />
                            <Button
                                label='filtrar'
                                leadingIcon='file_download'
                                variant='filled'
                                //onClick={handleClick}
                            />
                        </Group>
                    </Grid>
                </GridCol>
        </GridRow>
    </Grid>
    </>
  )
}
