import { CurrentAccountListFilters } from "./components/CurrentAccountListFilters"
import { Grid, GridCol, GridRow, TypoDisplay } from "@element/react-components";
import { CurrentAccountListTable } from "./components";
import { CustomCard } from "../../components/misc";


export const CurrentAccountList = () => {



  return (
    // <div>CurrentAccountList</div>
    <>
        <CurrentAccountListFilters />

        <Grid>
            <GridRow>
                <GridCol desktopCol={3} phoneCol={12}>
                    <CustomCard title="Deuda Total" zoom={0.9}>
                    <GridRow>
                        <GridCol desktopCol={12} >
                            ARS 100000
                            {/* <TypoDisplay level={7}>
                                ARS 100000
                            </TypoDisplay> */}
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol desktopCol={12}>
                            USD 100
                            {/* <TypoDisplay level={7}>
                                USD 100
                            </TypoDisplay> */}
                        </GridCol>
                    </GridRow>
                    </CustomCard>
                </GridCol>
                <GridCol desktopCol={3} phoneCol={12}>
                    <CustomCard title="Valores Acreditados" zoom={0.9}>
                        <GridRow>
                            <GridCol desktopCol={12} >
                                ARS 1999
                                {/* <TypoDisplay level={7}>
                                    ARS 100000
                                </TypoDisplay> */}
                            </GridCol>
                        </GridRow>
                        <GridRow>
                            <GridCol desktopCol={12}>
                                USD 10
                                {/* <TypoDisplay level={7}>
                                    USD 100
                                </TypoDisplay> */}
                            </GridCol>
                        </GridRow>
                        </CustomCard>
                </GridCol>
            </GridRow>
        </Grid>

        <Grid>
            <GridRow>
                <GridCol desktopCol={12} phoneCol={12}>
                    <CurrentAccountListTable />
                </GridCol>
            </GridRow>
        </Grid>
        
    </>
  )
}
