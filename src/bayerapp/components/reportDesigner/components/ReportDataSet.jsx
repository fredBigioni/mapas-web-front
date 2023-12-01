import { Grid, GridCol, GridRow } from "@element/react-components"
import { DragableItem } from "./DragableItem"

export const ReportDataSet = ({datasetList,handleDragStart, handleDragEnd}) => {
   
  return ( 
    <>
    <Grid fullWidth variant="airy">
        <GridRow>
            <GridCol desktopCol={12} phoneCol={12}>
                <h2> DataSet </h2>
                </GridCol>
                <GridCol desktopCol={12} phoneCol={12}>
                <ul>
                    {
                    datasetList.map( function (i){
                        // debugger;
                        return(
                            <li>
                                <DragableItem item = {i} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd}>           
                                    <div>{i.description}</div>
                                </DragableItem>
                            </li>
                        )                
                    })   
                    }
                </ul>
            </GridCol>
        </GridRow>
    </Grid>
    </>
  )
}
