import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '../../../utils/constants'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function CoursePage({ course }) {
  const router = useRouter()

  return (
    <Layout>
      <Box sx={{ my: 12, mx: 5 }}>
        <Button onClick={() => router.push('/courses')}>Go Back</Button>
        <Typography variant='h1' sx={{ fontSize: '4rem' }}>{course.attributes.title}</Typography>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            <Typography variant='p'>Review the course material. When you are ready, take the course quiz to complete the course</Typography>
            {course && course.attributes && course.attributes.course_items && course.attributes.course_items.data && course.attributes.course_items.data.map(course_item => (
              <Card sx={{ p: 2, mt: 3 }}>
                <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='h5'>{course_item.attributes.title}</Typography>
                  <Button onClick={() => router.push(`/courses/${course.attributes.slug}/course-section/${course_item.attributes.slug}`)}>Begin</Button>
                </Stack>
              </Card>
            ))}

            <Card sx={{ p: 2, mt: 3 }}>
              <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h5'>{course.attributes.final_quiz.data.attributes.title}</Typography>
                <Button onClick={() => router.push(`/courses/${course.attributes.slug}/quiz/${course.attributes.final_quiz.data.id}`)}>Begin</Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps({ req, query: {slug} }) {
  let course;
  try {
    const { data:courseData } = await axios.get(`${NEXT_PUBLIC_API_URL}/api/courses?populate=course_items,final_quiz&filters[slug][$eq]=${slug}`)
    course = courseData.data[0]
  } catch(error) {
    console.error(error)
  }

  return {
      props: {
          course
      }
  }
}
