import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../../components/Layout'

export default function VotingIndex() {
  return (
    <Layout>
      <Box sx={{ mx: 5, mt: 12 }}>
        <Typography variant='h1' sx={{ fontSize: '4rem', fontWeight: '300' }}>Voting Dashboard</Typography>

        <Typography variant='h3' sx={{ fontWeight: '300' }}>Open Sessions</Typography>

        <Typography variant='h3' sx={{ fontWeight: '300' }}>Voting Sessions</Typography>
      </Box>
    </Layout>
  )
}
