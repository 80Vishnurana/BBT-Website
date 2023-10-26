import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'

function ERPDevelopmen() {
    const heading = "Development Services"
    const subheading = " Our Services"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "40px" } }} >
                            ERP Development
                            <hr style={{ width: "20rem" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>

                            Whether you have developing business or an established one, you definitely want an ERP (Enterprise Resource Planning) system to automate your business operations. We have a significant experienced team of ERP developers who create fully integrated modules for managing your workforce along with workflows, financial flows and also manufacturing processes. We improve your business process by providing high-end solution that may track your projects and resources. The ERP development benefits that enhance your business profile among all.

                        </Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "300vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="../public/ERP.jpg" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>


            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex" }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>

                    grfgds Why Choose ERP Software to build up your Business:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, backgroundColor: "rgb(236, 240, 247)", py: 12 }}>
                <Box sx={{ height: "16.5rem", width: "80%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>


                <Box>
                    <Box sx={{ ml: 5 }}  >

                        <Paper sx={{ height: "auto", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Automated functionality
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>ERP development provide fully automated process that cut the manual procedure and help in saving more time to invest in other important work.
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Integrated Information
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>When you are using ERP system you get access to keep all data in one location and find information from single section. This makes the data consistent as well as up-to-date.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>

            <Box display={"flex"} sx={{
                px: { xs: 2, lg: 12, },
                py: 12
            }}>



                <Box>
                    <Box sx={{ mr: 5 }}  >

                        <Paper sx={{ height: "auto", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Reporting
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>With the help of ERP, system enhanced the reporting capabilities as well as generate customizable report to analyze data fast and make decision quickly. Here, user are allowed to execute their own report instead of rely to help from IT.

                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Customer Service
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>ERP System Increase the overall quality of Customer service. It provide an easy access for customer information and customer interaction to every sales and customer service people and improvise relation with them.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{ height: "52vh", width: "120%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>


            {/* .................................................... */}

            <Box display={"flex"} sx={{
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 12
            }}>
                <Box sx={{ height: "44vh", width: "70%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>

                <Box>
                    <Box sx={{ ml: 5 }}  >

                        <Paper sx={{ height: "auto", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>High Security
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>When you are using ERP system you get access to keep all data in one location and find information from single section. This makes the data consistent as well as up-to-date.
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Lower Operating cost
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Operating cost reduction is the most immediate beneficial help, you will get through ERP. It lower the cost of inventory control, production and marketing and make the organization to better comply with regulation.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>




        </>
    )
}

export default ERPDevelopmen
