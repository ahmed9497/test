import { Typography,Box } from '@mui/material'
import React from 'react'

const Movies = () => {
  return (
    <Box component={'div'} width={'100%'} sx={{
      borderTop: '2px solid lightgray',
      pt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <Typography variant='h1'>Movie Page</Typography>

    </Box>
  )
}

export default Movies