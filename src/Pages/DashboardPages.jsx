import { Grid } from '@mui/material'
import React from 'react'
import ChartComponent from '../Components/Dashboard/ChartComponent'
import FeatursComponent from '../Components/Dashboard/Featurs/FeatursComponent'
import LatestTransAction from '../Components/Dashboard/LatestTransActions/LatestTransAction'
import NewMembersPreviewComponent from '../Components/Dashboard/NewMemberPreview/NewMembersPreviewComponent'
import ReportsPages from './ReportsPages'

export default function DashboardPages() {
  return (
    <>
      <FeatursComponent />
      <ChartComponent />
      <div className='widget container mt-30' style={{ height: '400px' , }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <LatestTransAction />
          </Grid>
          <Grid item xs={4}>
            <NewMembersPreviewComponent />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
