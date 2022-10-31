import { Container, Typography, Box, Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container maxWidth="xs" sx={{mt:12 , mb: 2}}>
    <Box>
        <Typography variant="button" color="primary">
        Diseñado por Tomás D'Angelo con ReactJS
        </Typography>     
     </Box>
      </Container>
  )
}

export default Footer