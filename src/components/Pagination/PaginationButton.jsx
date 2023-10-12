import { Box, Button } from '@mui/material'
import React from 'react'


function PaginationButton({ prevBtnHandler, nextBtnHandler }) {

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" onClick={prevBtnHandler} >Previous</Button>
        <Button variant="contained" onClick={nextBtnHandler}>Next</Button>
      </Box>
    </>
  )
}

export default PaginationButton
