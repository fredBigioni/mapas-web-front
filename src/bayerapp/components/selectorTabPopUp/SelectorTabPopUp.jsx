import { Grid, GridCol, GridRow, Modal, Tooltip } from "@element/react-components"
import { useDispatch } from "react-redux";
import { setActiveView, setOpenedTabsSelector } from "../../../store/bayerApp";
import { ViewPage } from "../../config"
import "./selectorTabPopUp.css"

export const SelectorTabPopUp = ({open,openedTabs}) => {

    const dispatch = useDispatch();
//    console.log("SelectorTabPopUp");
//    console.log(openedTabs,open);

  const BoxView = () => {
    return(
    <>
    <GridRow variant="dense">
        {
        openedTabs.map((box,i) => {
            // console.log(i);
            return( 
                    //     if( i % 3 === 0 &&  i !== openedTabs.length ){
                    //         console.log("</row>")
                    //         console.log("<row>")
                    //     }
                    <GridCol
                    key= {`GridCol${box.id}`}
                    variant="dense"
                    desktopCol={4}
                    phoneCol={4}
                    tabletCol={4}
                    className="boxSize"  
                    onClick={()=>{
                                //alert(`sera dirigido a ${box.title}`)
                                dispatch(setActiveView(box))
                            }}              
                    >
                    <Tooltip 
                            key= {`TooltipCol${box.id}`}
                            text={box.title}
                        >
                            <div className="zoomBox" key= {`divCol${box.id}`}>
                                <ViewPage  activeView={{ viewName:box.viewName }} />
                            </div>
                        </Tooltip>                       
                    </GridCol>
                );
                    
        })
        }
    </GridRow>
    </>
    )  
  }

  return (
    <>
    {    open ? 
        <Modal 
            modalSize="large" //Accepted Values: fullscreen, max, xlarge, large, medium, small, dialog
            open={open}    
            title={"Menúes en uso"}    
            scrollable = {true}
            onClose={() => dispatch(setOpenedTabsSelector(false))}
        >
            <Grid
                fullWidth={true}
                fullHeight={true}
                variant="standard" //Accepted Values: standard, airy
            >
                {BoxView()}
            </Grid>
        </Modal>
        :<></> 
        }
    </>
  )
}
