import { Grid, GridCol, GridRow } from '@element/react-components'
import React, { useState } from 'react'
import { Report } from '../components/Report'
import { ReportDataSet } from '../components/ReportDataSet'

export const ReportDesignerLayOut = ({datasetList, reportConfig,  handleDragStart, handleDragEnd, handleDrop}) => {

   return (
    <Grid fullWidth>
        <GridRow>
            <GridCol desktopCol={2} phoneCol={2}>
                    <ReportDataSet datasetList={datasetList} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
            </GridCol>
            <GridCol desktopCol={10} phoneCol={10}>                    
                <GridRow>
                    {/* <GridCol desktopCol={12} phoneCol={12}>
                            Filters
                    </GridCol> */}
                    <GridCol desktopCol={12} phoneCol={12}>
                            <Report reportConfig={reportConfig} handleDrop ={handleDrop} />
                    </GridCol>
                </GridRow>
            </GridCol>
        </GridRow>
    </Grid>
  )
}
