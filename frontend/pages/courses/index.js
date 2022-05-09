import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '../../utils/constants'
import { useRouter } from 'next/router'

export default function CourseIndex({ courses }) {
  const router = useRouter()
  return (
    <Layout>
      <Box sx={{ my: 12, mx: 5 }}>
        <Typography variant='h1' sx={{ fontSize: '4rem' }}>All Courses</Typography>

        <Grid container spacing={2}>
          {courses.map(course => (
            <Grid item md={4} xs={12}>
              <Card sx={{ cursor: 'pointer' }} onClick={() => router.push(`/courses/${course.attributes.slug}`)}>
                <CardHeader title={course.attributes.title}>
                </CardHeader>
                <CardContent>
                  <Typography variant='p'>{course.attributes.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps() {
  let courses;
  try {
    const { data:courseData } = await axios.get(`${NEXT_PUBLIC_API_URL}/api/courses/`)
    courses = courseData.data
  } catch(error) {
    console.error(error)
  }

  return {
      props: {
          courses
      }
  }
}
