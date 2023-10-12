import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Certificate = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
                backgroundColor: "black",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: "inset 0 0 800px black",
                backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
            }}>
                <Box display={"flex"} sx={{
                    flexFlow: "column"
                }}>
                    <Typography variant='h3' sx={{ color: "white", fontSize: "45px" }}>
                        Certificates
                    </Typography>

                    <Typography textAlign={"center"} fontSize={"25px"}>
                        <NavLink to="/" >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "25px" }}>Certificate</span>
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Box>
                    <Typography variant='h5'>
                        About Blue Brain Technologies
                    </Typography>
                </Box>
            </Box>





        </>
    )
}

export default Certificate
