import {  Card, Grid, GridCol, GridRow, TypoDisplay } from "@element/react-components"
import { DragableItem } from "../components/dragableItem"
import { ReportDesigner } from "../components/reportDesigner"

export const TestPageReportDesigner = () => {

  const handleDrop = (e) => {
    console.log("handleDrop")
  }

  
  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e)
  }

  return (
    <ReportDesigner/>
    // <Grid>
    //     <GridRow>
    //         <GridCol desktopCol={6} phoneCol={12}>     
    //               <DragableItem>
    //                 <Card>                     
    //                 asd  
    //                 </Card>
                    
    //               </DragableItem>     
    //             {/* <TypoDisplay level={4}>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio enim perferendis animi facilis quia mollitia eveniet accusamus cumque? Eaque dignissimos labore delectus neque similique eum ex provident ipsa veritatis?
    //             </TypoDisplay> */}
    //         </GridCol>

    //         <GridCol desktopCol={6} phoneCol={12} >        
    //         <div onDrop ={ handleDrop } onDragOver={ handleDragOver} >
    //           destination
    //         </div>
    //             {/* <TypoDisplay level={5}>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio enim perferendis animi facilis quia mollitia eveniet accusamus cumque? Eaque dignissimos labore delectus neque similique eum ex provident ipsa veritatis?
    //             </TypoDisplay> */}
    //         </GridCol>
    //     </GridRow>
    // </Grid>

  )
}
