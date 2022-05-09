import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function QuizQuestion({ question }) {
  console.log(question.options)
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant='h5'>Question {question.id}</Typography>
      <p>{question.question_description}</p>
      {question.options.map(option => (
        <div>
          <input type='radio' id={`${question.id}_${option.id}`} name={`${question.id}`} value={`${question.id}_${option.id}`} />
          <label htmlFor={`${question.id}_${option.id}`}>{option.option_description}</label>
        </div>
      ))}
    </Box>
  )
}
