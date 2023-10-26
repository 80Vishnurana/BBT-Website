import Heading from '../Heading/Heading'
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const PhpTraning = () => {
    const heading = " IT Training Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            PHP Training
                            <hr style={{ width: "16rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            PHP is an abbreviation of hypertext preprocessor, embedded with HTML scripting language. PHP is mainly used to develop dynamic web application and its simplicity and many frameworks on which it is built make it more popular and a good choice. PHP developers are high in demands in these days and get paid a good amount everywhere. We provide this course under the supervision of our highly professional and experts to train the students in PHP and solely enhance the skill and knowledge of the students in frameworks. Our training is structure in specific way to suits with requirement of both employer and employee. Start your own journey in PHP trainer to PHP developer with Blue Brain Technologies.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="30px" width="30px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>

                    PHP training will provide you different kind of skills such as:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to Adapt
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> If you are a non-technical person or even bad in coding, you can learn PHP easily without getting hours of learning. This is most relieving benefit of learning PHP. Compared to others, learning PHP does not need to spend a lot of time in studying & understanding manuals. But only a PHP can develop a complete web page on its own capability.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>User Friendly Context
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> By learning PHP, you get to know about developing user friendly website. PHP is the only & first priority to every developer in case of developing website. It enhances the flexibility in website more than C, C++ and ASP and helps to improve traffic on website.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Control Over website
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>PHP has the maximum control over website, when other programming language need a full script to work, PHP completed the same the work few codes and lines. The versatility & easiness of PHP come from control over website, which makes it versatile in writing code, creating or editing website.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>More Secure Website
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> With the help of PHP you can develop more safe & secure website. PHP programming is the most secured pathway to build up a website and dynamic web application. It helps to develop multiple layered securities to prevent threats and malware attack. Experiencing on PHP programming make you more independent to trust yourself and make you aware of those little information that make an invulnerable & trustworthy websites.
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

export default PhpTraning
