import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'

const ApiDevelopment = () => {
    const heading = "Development Services"
    const subheading = "Our Services"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, width: "50vw" }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            API's Development
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Most modern applications use APIs (Application Programming Interface) to build up the core of the application upon which the graphical interfaces are built. It’s a computing interfaces, allocates the interplay among multiple software intermediaries. These graphical interfaces can be anything like mobile app, desktop application or even websites also. An API can be purely custom, or specific to a component, or can be designed on the industry standard to ensure the requirements. At Blue Brain Technologies, our API developers have exquisite experience in providing API development and integration service at low cost. Additionally, our skilled and experienced developers apply the latest technologies and latest method in data processing in different programming language, thus your APIs built secure and give high performance result.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "300px" }, width: { xs: "80vw", md: "100vw", lg: "30vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Why Choose API’s Development Software for your business:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "47vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "auto", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Increase Work Efficiency
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>API specifies the assembling process of software component to develop a program. Due to API support, developers can meet objectives before deadline and do more work in less time.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Encourage Innovation
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>API increase the rapid growth in innovation arena and encourage those who know the correct use to create solution to make newer things happen. It gives the access to standardize to external developers along with those who had thorough knowledge of data exchange models.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Know Your User Bettere
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>API will help you to gain deeper insights of the users and their interaction with the application by integrating your application with third party platform. After knowing the users requirement you can enhance the user experience to reduce the risk of switching the platform.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Whip up your ranking in Feature Development Consistency
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>API makes new feature insertion easy for your entire business process. With comprehensive API, the possibilities of new feature effecting any existing feature is little less and chances of discovering error is higher than expected when any new component will be invited by other component.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "30vh" }, width: { xs: "98%", lg: "100%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "auto" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Establishes consistent Automation
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> Through API development, automation work is the biggest advantage for any business. API’s are used for automatically build, automatically deploy and automatically scale cloud service, where the application itself indicate on the visitors growth and also tell when it needs an extra instance to keep the application performance fast enough for the visitors.
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

export default ApiDevelopment
