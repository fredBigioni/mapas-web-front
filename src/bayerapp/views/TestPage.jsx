import {  Grid, GridCol, GridRow, TypoDisplay } from "@element/react-components"


export const TestPage = () => {

  return (
    <Grid fullWidth>    
        <GridRow >
            <GridCol desktopCol={10}  >
                    <GridRow >
                        <GridCol desktopCol={7} phoneCol={12} >        
                            <TypoDisplay level={5}>
                                    aLorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio enim perferendis animi facilis quia mollitia eveniet accusamus cumque? Eaque dignissimos labore delectus neque similique eum ex provident ipsa veritatis?
                            </TypoDisplay>
                        </GridCol>
                        <GridCol desktopCol={5} phoneCol={12} >        
                            <TypoDisplay level={5}>
                                    bLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quaerat! Quidem sint fuga, necessitatibus eos doloremque sed, ea facilis laboriosam et ab aliquid, earum laudantium. Ea aperiam sint mollitia sunt.
                            </TypoDisplay>
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol desktopCol={12} phoneCol={12} >                    
                                <TypoDisplay level={5}>
                                        cLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quaerat! Quidem sint fuga, necessitatibus eos doloremque sed, ea facilis laboriosam et ab aliquid, earum laudantium. Ea aperiam sint mollitia sunt.
                                </TypoDisplay>
                        </GridCol>
                    </GridRow>
            </GridCol>   
            <GridCol desktopCol={2}  >asdasdasd</GridCol>   


        
        
        </GridRow>
    </Grid>

  )
}
