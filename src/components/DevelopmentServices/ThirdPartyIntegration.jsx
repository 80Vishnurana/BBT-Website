import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'

const ThirdPartyIntegration = () => {
    const heading = "Development Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Third-Party Integration
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Third-Part-Integration in development add something extra to existing software. It’s an idea of integrating previously developed features within a software code to enhance overall functionality of the same. It speed up the development process & cut down the market time by collaborating with third party. It helps the developers to wipe out the need to develop every piece of code & enable to focus on more important features to uplift your company’s profile. At Blue Brain Technologies we provide Third Party Integration in a cost effective manner to support your customers in Web or mobile application development to meet your business requirements. We help you to stay active and kept adapting the new trends in system because the ecosystem of the web application is keep evolving.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "350px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Why choose Third-Party-Integration for your company’s website:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "48vh" }, width: { xs: "100%", lg: "75%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "47vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Low Cost
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Third-Party-Integration is much cheaper than a tailored software although, it is more beneficial and easy to use. It’s integrated codes assists to enhance the functionality of existing software at much less cost and the rest money could be used in other core production.

                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Time Saving
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> Using Third-Party-Integration in website development allows quick deployments. It saves a lot of time and free up limited development resources to focus on other significant products which may assist the business in growth.
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

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "57vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Better Customer Experience
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Working with Third-Party-Integration you will get multiple benefits in the context of customer experience. First of all, your business will be able to focus on the substantive functionality and make it level up. On the other hand the integrated features will work even flawlessly and perform to support the core productivity.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>More Secure
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> The integrated codes of third party open a safe & secure passage to share important document with clients. It will give you complete access to your security to maintain the secrecy of your sensitive data online and trace fraudulent before it take place.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "50vh" }, width: { xs: "98%", lg: "100%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "57vh" }, width: { xs: "98%", lg: "100%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "57vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Better Customer Experience
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Working with Third-Party-Integration you will get multiple benefits in the context of customer experience. First of all, your business will be able to focus on the substantive functionality and make it level up. On the other hand the integrated features will work even flawlessly and perform to support the core productivity.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", px: 1, mt: 5 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Flexible and Personalized
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>There are almost dozens of features in every sophisticated third party integrated software, created for achieving many of the related milestone for the company, but at a time there are only few features are relevant and others are not. With the help of Third-Party-Integration, one can select only those which is needed and configured them according to the set goal.
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

export default ThirdPartyIntegration
