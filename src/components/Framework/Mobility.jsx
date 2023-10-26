import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const Mobility = () => {
    const heading = "Framework & Technology Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Mobility (Hybrid & Native)
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Mobility is a service that provides you a satisfied marketing result through Mobile applications. Agree or not Mobile Apps are the easiest way to grab attention of peoples because they prefer spending more time on Mobile rather than other place like visiting an actual shop. Mobile device not only ease our life but revolutionized industries in different sectors. In the term of productivity and growth in business mobility has placed itself in one of the most important factors whether it is Hybrid mobility App or Native.
                            Blue Brain Technologies works to expand your business growth above your expectation and give our clients a peace of mind to enhance their business ideas. We free them from every marketing issue and handled it at ease with our marketing experts. We conduct every competitive analysis before landing page to avoid poorly features that user have negatively reviewed before. We work accordingly as per clients requirement and what good for their business & revenue.</Typography>


                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Hybrid Mobility
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Hybrid mobility or Mobile Application will leverage cross-platform capabilities and use on-code base to cover multiple platforms. Molded in native container, hybrid apps are created with special framework to enable the hustle free interaction between application interface and Smartphone in-built native features and its hardware.

                        </Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>

                <Typography variant='h6' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Using MVC framework during app development we offer our customer these advantages:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Faster Development Process
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>During web application development we use MVC model to faster the development process. MVC work simultaneously on two different logics. One program will run over VIEW and another will over CONTROL to create the business logic of Web Application. It completed the development three times faster than using other development pattern.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Aid multiple View
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> As the development process works on separate data and two different logics, it benefits to face less duplication of code. The separation of view model enable to user interface to display multiple view of the same data at the same time.
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
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "55vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>SEO Friendly Application
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Web development is futile without SEO friendly platform. MVC framework provides easy development of SEO friendly URL to generate more traffic & increase website engagement. MVC framework will integrate with scripting language Java to develop feature rich Web application.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Support Non-parallel Technique
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>MVC Framework integrates with JavaScript to make the application which support PDF files, Site-Specific Browser and Desktop Appliances. MVC model also support Asynchronous technique which helps developers to build an application that load very fast.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>













        </>
    )
}

export default Mobility
