import { Typography,Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box component={'div'} width={'100%'} sx={{borderTop:'2px solid lightgray',
    pt:3,display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Typography variant='h1'>Home Page</Typography>
      </Box>
  )
}

export default Home