import { Grid } from '@mui/material'
import React from 'react'
import ChartComponent from '../Components/Dashboard/ChartComponent'
import FeatursComponent from '../Components/Dashboard/Featurs/FeatursComponent'
import LatestTransAction from '../Components/Dashboard/LatestTransActions/LatestTransAction'
import NewMembersPreviewComponent from '../Components/Dashboard/NewMemberPreview/NewMembersPreviewComponent'

export default function DashboardPages() {
  return (
    <>
      <FeatursComponent />
      <ChartComponent />
      <div className='widget'>
        <Grid container>
          <Grid item sx={8}>
            <LatestTransAction />
          </Grid>
          <Grid item >
            <NewMembersPreviewComponent />
          </Grid>
        </Grid>


      </div>
    </>
  )
}
