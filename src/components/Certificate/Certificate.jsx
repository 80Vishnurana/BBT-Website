import { Box, Typography, Grid, Paper } from '@mui/material'
import React from 'react'
import Heading from '../Heading/Heading'

const heading = "Certificates"
const subheading = " Certificates"

const Certificate = () => {
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            {/* <Box sx={{ height: "60vh", width: "100%", display: "flex", p: 10 }}>
                <Box sx={{
                    height: "40vh",
                    width:
                }} >

                </Box>
                <Box >

                </Box>
                <Box >

                </Box>
            </Box> */}

            <Grid container direction={"row"} sx={{ width: "100%", justifyContent: "space-around", pl: 5, pt: 10, columnGap: 0, backgroundColor: "whitesmoke", height: { xs: "auto", md: "auto", lg: "100vh" }, mt: -5 }}>

                <Grid xs={12} md={6} lg={3}>
                    <Box sx={{ width: "300px", border: "2px solid red", height: "50vh" }}>
                        <Paper>
                        </Paper>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Box sx={{ width: "300px", border: "2px solid red", height: "50vh" }} >
                        <Paper>

                        </Paper>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Box sx={{ width: "300px", border: "2px solid red", height: "50vh" }}>
                        <Paper>
                        </Paper>

                    </Box>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Box sx={{ width: "300px", border: "2px solid red", height: "50vh" }}>
                        <Paper>
                        </Paper>

                    </Box>
                </Grid>
            </Grid>





        </>
    )
}

export default Certificate
