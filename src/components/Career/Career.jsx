import { Box, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Heading/Heading'
const Career = () => {

  const heading = "Blue Brain Technologies Career"
  const subheading = " Career"
  return (
    <>
      <Heading Title={heading} subTitle={subheading} />
      <Box sx={{ height: "80vh", width: "100%" }}>
        <Typography variant='h5' sx={{ fontWeight: "bold", fontSize: "32px", textAlign: "center", px: { xs: 4, lg: 2 } }} >
          Current Opening at Noida Location
        </Typography>
      </Box>
      {/*  */}
    </>
  )
}

export default Career
