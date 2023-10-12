import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Career = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black" }} >
        <Box sx={{
          backgroundColor: "black",
          backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: "inset 0 0 800px black",
          backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
        }}>
          <Box display={"flex"} sx={{
            flexFlow: "column",
            opacity: "2",
          }}>
            <Typography sx={{ color: "white", textAlign: "center", py: "0.3rem", fontSize: { xs: "25px", lg: "40px" } }}>
              Blue Brain Technologies Career
            </Typography>

            <Typography textAlign={"center"} fontSize={"25px"}>
              <NavLink to="/" >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "25px" }}>Career</span>
            </Typography>
          </Box>

        </Box>
      </Box>

    </>
  )
}

export default Career
