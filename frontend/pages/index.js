import { Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Layout>

      <Box sx={{ m: 8 }}>
       <Typography variant='h1' sx={{ mt: 12, fontSize: '4rem', fontWeight: '300' }}>
          Blockchain Learning
        </Typography>

        <Typography variant='p'>
          Welcome to your introduction to blockchain development!  To get started, connect your wallet and pick a learning path.  
        </Typography>

        <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <>
          <Typography variant='h3' sx={{fontSize: '2.5rem', fontWeight: '300' }}>
            Javascript Path
          </Typography>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='p'>
                Begin your journey learning Javascript!  This course will start at the very basic level for those who have no previous programming experience. 
              </Typography>
              <Button variant='contained' sx={{ width: '100px', mt: 2 }} onClick={() => router.push('/courses/javascript')}>Begin</Button>
              </Box>
            </CardContent>
          </Card>
          </>
          
        </Grid>

        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <>
          <Typography variant='h3' sx={{fontSize: '2.5rem', fontWeight: '300' }}>
            Python Path
          </Typography>

          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='p'>
                Begin your journey learning Python!  This course will start at the very basic level for those who have no previous programming experience. 
              </Typography>
              <Button variant='contained' sx={{ width: '100px', mt: 2 }} onClick={() => router.push('/courses/python')}>Begin</Button>
              </Box>
            </CardContent>
          </Card>
          </>
          
        </Grid>

        <Grid item xs={12} md={6} sx={{ mt: 3 }}>
          <>
          <Typography variant='h3' sx={{fontSize: '2.5rem', fontWeight: '300' }}>
            Solidity Path
          </Typography>

          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='p'>
                Begin your journey learning Solidity!  This course will start at the very basic level for those who have no previous programming experience. In this series, we will use truffle to build our solidity contracts.
              </Typography>

              <Button variant='contained' sx={{ width: '100px', mt: 2 }} onClick={() => router.push('/courses/solidity')}>Begin</Button>
            </Box>
            </CardContent>
          </Card>
          
          </>
          
        </Grid>
        </Grid>
        
      </Box>
    </Layout>
  )
}
