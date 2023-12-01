import { Button, Grid, GridCol, GridRow, Padding, Textfield, TypoDisplay } from '@element/react-components';
import logo from "../../assets/logo.svg"
import lines from "../../assets/img/3Line.PNG"

export const AuthLayout = ({ children, title = '', AppName = 'Bayer' }) => {

  return (
    
    <Grid 
    fullWidth 
    // fullHeight
    gridAlign = "center"    
    >
      <GridRow>
            <GridCol desktopCol={3} phoneCol={2} tabletCol={2} >                
            </GridCol>
            <GridCol
                desktopCol={6}
                phoneCol={8}
                tabletCol={8}
                style = {{borderStyle:"solid"}}
                horizontalAlign = 'center'
                verticalAlign = 'middle'
            >
                <Grid fullWidth>
                    <GridRow >
                        <GridCol
                            desktopCol={12}
                            phoneCol={12}
                            tabletCol={12}
                            // style = 
                            // {{
                            //     borderStyle:"solid",
                            //     borderColor:"red"
                            // }}
                        >

                                <img 
                                src={logo} 
                                alt="logo" 
                                style={{
                                    height:"45px",
                                    paddingRight:"5px"
                                    }}
                                />
                                <TypoDisplay 
                                level={4}
                                // type='display6'
                                >
                                    {/* {AppName}     */}
                                </TypoDisplay>
                                
                        </GridCol> 
                    </GridRow>
                    <GridRow >
                        <GridCol
                            desktopCol={12}
                            phoneCol={12}
                            tabletCol={12}
                            style = 
                            {{
                               marginTop:"30px"
                            }}
                        >
                            <img 
                            src={lines} 
                            alt="login" 
                            style={{
                                height:"30px",
                                paddingRight:"1px"
                                }}
                            />
                            <TypoDisplay level={5}>
                                {title}    
                            </TypoDisplay>
                        </GridCol> 
                    </GridRow>
                    <GridRow >
                        <GridCol
                            desktopCol={12}
                            phoneCol={12}
                            tabletCol={12}
                            style = 
                            {{
                               marginTop:"30px"
                            }}
                        >
                                        {/* <Grid fullWidth>
                                        <GridRow>
                                        <GridCol
                                        desktopCol={12}>
                                        <Button fullWidth></Button>
                                        </GridCol>
                                        </GridRow>
                                        </Grid> */}
                           {children}
                        </GridCol> 
                    </GridRow>
                </Grid>
            </GridCol> 
        </GridRow>
    </Grid>

  )
}
