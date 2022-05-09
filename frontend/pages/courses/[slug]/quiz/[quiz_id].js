import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { NEXT_PUBLIC_API_URL } from '../../../../utils/constants'
import Layout from '../../../../components/Layout'
import { marked } from 'marked'
import { useRouter } from 'next/router'
import QuizQuestion from '../../../../components/QuizQuestion'

export default function CourseQuiz({ quiz, slug }) {
  const router = useRouter()
  return (
    <Layout>
      <Box sx={{ my: 12, mx: 5 }}>
        <Button onClick={() => router.push(`/courses/${slug}`)}>Go Back</Button>
        <Typography variant='h1' sx={{ fontSize: '4rem' }}>{quiz.attributes.title}</Typography>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mt: 3 }}>
             <Card sx={{ p: 2, mt: 3 }}>
                 {quiz.attributes.questions.map(question => (
                     <QuizQuestion question={question} />
                 ))}
             </Card>
             <Button color='primary' variant='contained' sx={{ mt: 4 }}>Submit Quiz</Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps({ req, query: {slug, quiz_id} }) {
  let quiz;
  try {
    const { data:quizData } = await axios.get(`${NEXT_PUBLIC_API_URL}/api/quizzes/${quiz_id}`)
    quiz = quizData.data
  } catch(error) {
    console.error(error)
  }

  console.log(quiz.attributes.questions[0].options)

  return {
      props: {
          quiz,
          slug
      }
  }
}
