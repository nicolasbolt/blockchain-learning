import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Box sx={{mx: 'auto', my: 12, width: '50vw'}}>
        <Typography sx={{ fontSize: '4rem' }} variant='h1'>Blockchain Learning</Typography>
        <Typography variant='p'>This project was originally created for the 2022 Chainlink Hackathon.  The goal of this project was to create a proof of concept focused on increasing blockchain adoption while working on a practical application of onchain voting.  Because of this goal, there are two parts to this application.  There is an educational piece focused on bringing new outside developers into this ecosystem.  There is also a second part focused on building a voting platform that decides future courses and additions to the blockchain learning platform.</Typography>
      </Box>
    </Layout>
  )
}
