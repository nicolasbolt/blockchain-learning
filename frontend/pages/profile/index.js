import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../../components/Layout'

export default function ProfilePage() {
  return (
    <Layout>
        <Box sx={{ mx: 5, mt: 12 }}>
            <Typography variant='h1' sx={{ fontSize: '4rem' }}>Profile</Typography>
            <Typography variant='h4' sx={{ mt: 12, fontWeight: '400' }}>Your Stats</Typography>

            <Grid container spacing={2}>
                <Grid item md={4} sx={12}>
                    <Stack>
                        <Typography variant='h5'>Web 3</Typography>
                    </Stack>
                </Grid>

                <Grid item md={4} sx={12}>
                    <Typography variant='h5'>Web development</Typography>
                </Grid>

                <Grid item md={4} sx={12}>
                    <Typography variant='h5'>Software Engineering</Typography>
                </Grid>
            </Grid>
        </Box>
    </Layout>
  )
}
