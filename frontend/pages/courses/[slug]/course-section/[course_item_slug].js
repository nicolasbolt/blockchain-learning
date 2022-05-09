import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '../../../../utils/constants'
import Layout from '../../../../components/Layout'
import { marked } from 'marked'
import { useRouter } from 'next/router'

export default function CourseItemPage({ course_item }) {
  const router = useRouter()
  return (
    <Layout>
      <Box sx={{ my: 12, mx: 5 }}>
        <Button onClick={() => router.push(`/courses/${course_item.attributes.course.data.attributes.slug}`)}>Go Back</Button>
        <Typography variant='h1' sx={{ fontSize: '4rem' }}>{course_item.attributes.title}</Typography>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mt: 3 }}>
             <Box>
                <div
                    dangerouslySetInnerHTML={{__html: marked.parse(course_item.attributes.content)}}>
                    
                </div>
             </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps({ req, query: {course_item_slug} }) {
  let course_item;
  try {
    const { data:courseData } = await axios.get(`${NEXT_PUBLIC_API_URL}/api/course-items?populate=course&filters[slug][$eq]=${course_item_slug}`)
    course_item = courseData.data[0]
  } catch(error) {
    console.error(error)
  }

  return {
      props: {
          course_item
      }
  }
}
