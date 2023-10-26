import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Heading = (props) => {
    const datatheading = props.Title
    const datasubTitle = props.subTitle
    return (
        <>
            <Box sx={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
                backgroundColor: "black",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: "inset 0 0 800px black",
                backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "15rem", mb: "2rem"
            }}>
                <Box display={"flex"} sx={{
                    flexFlow: "column"
                }}>
                    <Typography variant='h3' sx={{ color: "white", fontSize: { xs: "30px", lg: "40px" }, fontWeight: 600 }}>
                        {datatheading}
                    </Typography>

                    <Typography textAlign={"center"} fontSize={"25px"}>
                        <NavLink to="/"  >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "23px" }}>{datasubTitle}</span>

                    </Typography>
                </Box>
            </Box>
            <Box>

            </Box>
        </>
    )
}

export default Heading
