import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const Reaporting = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, width: { xs: "full", lg: "80vw" } }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Reporting
                            <hr style={{ width: "10rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Reporting software is a powerful and fastest growing data visualization tool used in business Intelligence Industry. From connection to collaboration reporting tool is most secure and flexible tool that elevate people with the power of data and end-to-end analytics stage for your data. It offers the multitude of benefits to the companies who use it for their business analytical needs. Here, at Blue Brain Technologies we avail you with the benefits of reporting tools with high caliber aspects. Through reporting tools we take you to insight you never thought would exist. You can explore data freely without any details in mind by using interactive visualization and data drilling tools. The Reporting tool support real time data visualization with easy and interactive approach. Business executives use reporting tools to find correlation in data without getting involved in data science knowledge.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "350px" }, width: { xs: "80vw", md: "100vw", lg: "40vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Reporting tools have many benefits that we offer you at Blue Brain Technologies:


                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "58vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "58vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Data Visualization
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> Reporting tool is data visualization experts along with its technology it support complex computation, data blending and dash boarding to create a beautiful visualization of intricate combination of data. It delivers insights that just can’t be possible to staring at spreadsheet or without the help of reporting tool.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to use
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Reporting tool has an in-built manner of creating graphics and user friendly interface that help user to eliminate the need of an expert and having a good time with software. Through reporting tool’s user friendly interface user collect raw data into catchy diagram which facilitates information analyzing for building patterns.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                // backgroundColor: "rgb(236, 240, 247)",
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "55vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>High Performance
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Reposting tool is reliable and robust in performance apart from high visualization functionality. The tools also perform their task with big data easily which makes it powerful performer.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Handle Large Amount Data
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Reporting tool has ability to handle larger data at ease. Creating million of raw data across multiple source type and data set is straight forward and quick. This can be created with large amount of data without impacting the performance of the dashboard.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "47vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>

        </>
    )
}

export default Reaporting
